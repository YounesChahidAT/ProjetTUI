namespace Projet_TUI.Domain.Tests.Entities
{
    public class PassagereTests
    {
        [Fact]
        public void Passager_ShouldSetPropertiesCorrectly()
        {
            // Arrange
            int idValue = 1;
            DateTime creationDateValue = DateTime.Now;
            Guid createdByValue = Guid.NewGuid();
            DateTime updateDateValue = DateTime.Now;
            Guid updatedByValue = Guid.NewGuid();
            bool deletedValue = false;
            DateTime deletedDateValue = DateTime.Now;
            Guid deletedByValue = Guid.NewGuid();

            string nomValue = "Test Nom";
            TypePassagere typeValue = TypePassagere.Adulte;
            int ageValue = 26;
            bool doublePlacesValue = false;
            string familleIdValue = "-";
            int volIdValue = 1;

            // Act

            var passager = new PassagereEntity
            {
                Id = idValue,
                CreationDate = creationDateValue,
                CreatedBy = createdByValue,
                UpdateDate = updateDateValue,
                UpdatedBy = updatedByValue,
                Deleted = deletedValue,
                DeletedBy = deletedByValue,
                DeletedDate = deletedDateValue,
                Nom = nomValue,
                Type = typeValue,
                Age = ageValue,
                DoublePlaces = doublePlacesValue,
                FamilleId = familleIdValue,
                VolId = volIdValue,

            };


            // Assert
            passager.Id.Should().Be(idValue);
            passager.CreationDate.Should().Be(creationDateValue);
            passager.CreatedBy.Should().Be(createdByValue);
            passager.UpdateDate.Should().Be(updateDateValue);
            passager.UpdatedBy.Should().Be(updatedByValue);
            passager.Deleted.Should().Be(deletedValue);
            passager.DeletedBy.Should().Be(deletedByValue);
            passager.DeletedDate.Should().Be(deletedDateValue);
            passager.Nom.Should().Be(nomValue);
            passager.Type.Should().Be(typeValue);
            passager.Age.Should().Be(ageValue);
            passager.DoublePlaces.Should().Be(doublePlacesValue);
            passager.FamilleId.Should().Be(familleIdValue);
            passager.VolId.Should().Be(volIdValue);
        }


    }
}