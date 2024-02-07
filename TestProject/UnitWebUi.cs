using Core.Domains;
using Core.Entities;
using WebUI.HelpersServices;
using static Utility.Enums;

namespace TestProject
{

    [TestClass]
   
    public class UnitWebUi
    {
        [TestMethod]
        public void TestMethodhelperService()
        {
            HelperService helperService = new HelperService();
            List<PassagereEntity> listeAttente = new List<PassagereEntity>();
            FamilleDomain famille = new FamilleDomain();
            AvionDomain avion = new AvionDomain();


            // Ajout des passagers dans la liste d'attente

            listeAttente.Add(new PassagereEntity { Nom = "John Doe", Type = TypePassagere.Adulte, Age = 30, DoublePlaces = false, FamilleId = "1", VolId = 1 });
            listeAttente.Add(new PassagereEntity { Nom = "John Doe 1", Type = TypePassagere.Enfant, Age = 11, DoublePlaces = false, FamilleId = "1", VolId = 1 });
            listeAttente.Add(new PassagereEntity { Nom = "John Doe 2", Type = TypePassagere.Enfant, Age = 8, DoublePlaces = false, FamilleId = "1", VolId = 1 });

            famille.Members = listeAttente;
            famille= helperService.CalculateTotalPrice(famille);

            Assert.AreEqual(famille.Montant,550);

            listeAttente.Add(new PassagereEntity { Nom = "John Doe 3", Type = TypePassagere.Adulte, Age = 45, DoublePlaces = true, FamilleId = "-", VolId = 1 });
           
            
            avion.Members = listeAttente;
            avion = helperService.CalculateTotalPriceAvion(avion);

            Assert.AreEqual(avion.Montant, 1050);


        }
    }
}