
using Core.Domains;
using Core.Entities;
using WebUI.ViewModels;
using static Utility.Enums;

namespace WebUI.HelpersServices
{
    public class HelperService
    {
        public FamilleDomain CalculateTotalPrice(FamilleDomain famille)
        {
            double totalPrice = 0;

            foreach (var member in famille.Members)
            {
                if (member.Type == TypePassagere.Adulte)
                {
                    totalPrice += member.DoublePlaces ? 500 : 250;
                }
                else if (member.Type == TypePassagere.Enfant)
                {
                    totalPrice += 150;
                }
            }
            famille.Montant = totalPrice;
            return famille;
        }

        public AvionDomain CalculateTotalPriceAvion(AvionDomain avion)
        {
            double totalPrice = 0;

            foreach (var member in avion.Members)
            {
                if (member.Type == TypePassagere.Adulte)
                {
                    totalPrice += member.DoublePlaces ? 500 : 250;
                }
                else if (member.Type == TypePassagere.Enfant)
                {
                    totalPrice += 150;
                }
            }
            avion.Montant = totalPrice;
            return avion;
        }
        public double CalculatePrice(PassagereViewModel passagere)
        {
            double totalPrice = 0;

            if (passagere.Type == TypePassagere.Adulte)
            {
                totalPrice += passagere.DoublePlaces ? 500 : 250;
            }
            else if (passagere.Type == TypePassagere.Enfant)
            {
                totalPrice += 150;
            }
            return totalPrice;
        }
        //Attribution des sièges aux passagers
        public int[,] AttributionSieges(List<PassagereViewModel> listeAttente)
        {
            int[,] avion = new int[34, 6]; // 33 rangées de 6 sièges
            int chiffreAffaires = 0;

            // Créer un dictionnaire pour stocker les membres de la famille par famille ID
            Dictionary<int, List<PassagereViewModel>> familles = new Dictionary<int, List<PassagereViewModel>>();

            // Regrouper les passagers par famille ID
            foreach (var passager in listeAttente)
            {
                int familleId = int.Parse(passager.FamilleId == "-" ? "0" : passager.FamilleId);
                if (!familles.ContainsKey(familleId))
                {
                    familles[familleId] = new List<PassagereViewModel>();
                }
                familles[familleId].Add(passager);
            }

            // Attribution des sièges aux passagers
            foreach (var famille in familles.Values)
            {
                foreach (var passager in famille)
                {
                    bool placeTrouvee = false;
                    for (int i = 0; i < 34; i++)
                    {
                        for (int j = 0; j < 6; j++)
                        {
                            if (avion[i, j] == 0) // Si le siège est vide
                            {
                                if (passager.Type == TypePassagere.Enfant && (j == 0 || j == 5)) // Si c'est un enfant, il doit être assis à côté d'un adulte
                                {
                                    continue;
                                }
                                if (passager.DoublePlaces && j == 5 && passager.Type != TypePassagere.Enfant) // Si c'est un adulte nécessitant deux places, vérifier si la place est disponible
                                {
                                    if (avion[i, j - 1] == 0)
                                    {
                                        avion[i, j] = passager.Id ?? 0;
                                        avion[i, j - 1] = passager.Id ?? 0;
                                        chiffreAffaires += 500; // Prix pour deux places
                                        placeTrouvee = true;
                                        break;
                                    }
                                }
                                else if (!passager.DoublePlaces) // Si c'est un adulte ou un enfant
                                {
                                    avion[i, j] = passager.Id ?? 0;
                                    chiffreAffaires += passager.Type == TypePassagere.Adulte ? 250 : 150;
                                    placeTrouvee = true;
                                    break;
                                }
                            }
                        }
                        if (placeTrouvee) break;
                    }
                }
            }
            return avion;
        }

    }
}
