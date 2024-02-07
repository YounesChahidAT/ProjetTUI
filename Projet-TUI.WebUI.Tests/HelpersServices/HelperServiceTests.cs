using Core.Domains;
using Core.Entities;
using FluentAssertions;
using WebUI.HelpersServices;
using static Utility.Enums;

namespace Projet_TUI.WebUI.Tests.HelpersServices
{
    public class HelperServiceTests
    {
        [Fact]
        public void CalculateTotalPrice_Tests()
        {
            HelperService helperService = new HelperService();
            FamilleDomain famille = new FamilleDomain();

            // Act
            famille.Members.Add(new PassagereEntity { Nom = "John Doe", Type = TypePassagere.Adulte, Age = 30, DoublePlaces = false, FamilleId = "1", VolId = 1 });
            famille.Members.Add(new PassagereEntity { Nom = "John Doe 1", Type = TypePassagere.Enfant, Age = 11, DoublePlaces = false, FamilleId = "1", VolId = 1 });
            famille.Members.Add(new PassagereEntity { Nom = "John Doe 2", Type = TypePassagere.Enfant, Age = 8, DoublePlaces = false, FamilleId = "1", VolId = 1 });

            famille = helperService.CalculateTotalPrice(famille);

            // Assert
            famille.Montant.Should().Be(550);


        }
        [Fact]
        public void CalculateTotalPriceAvion_Tests()
        {            
            // Arrange
            HelperService helperService = new HelperService();
            AvionDomain avion = new AvionDomain();


            // Act
            avion.Members.Add(new PassagereEntity { Nom = "John Doe", Type = TypePassagere.Adulte, Age = 30, DoublePlaces = false, FamilleId = "1", VolId = 1 });
            avion.Members.Add(new PassagereEntity { Nom = "John Doe 1", Type = TypePassagere.Enfant, Age = 11, DoublePlaces = false, FamilleId = "1", VolId = 1 });
            avion.Members.Add(new PassagereEntity { Nom = "John Doe 2", Type = TypePassagere.Enfant, Age = 8, DoublePlaces = false, FamilleId = "1", VolId = 1 });
            avion.Members.Add(new PassagereEntity { Nom = "John Doe 3", Type = TypePassagere.Adulte, Age = 45, DoublePlaces = true, FamilleId = "-", VolId = 1 });


            avion = helperService.CalculateTotalPriceAvion(avion);
            // Assert
            avion.Montant.Should().Be(1050);


        }
    }
}
