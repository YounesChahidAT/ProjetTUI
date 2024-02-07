namespace Projet_TUI.Domain.Tests.Entities
{
    public class VolTests
    {
        [Fact]
        public void VolEntity_ShouldSetPropertiesCorrectly()
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

            string descriptionValue = "Test Description";
            string piloteValue = "Test Pilote";
            string numAvionValue = "Test NumAvion";

            // Act
            var volEntity = new VolEntity
            {
                Id = idValue,
                CreationDate = creationDateValue,
                CreatedBy = createdByValue,
                UpdateDate = updateDateValue,
                UpdatedBy = updatedByValue,
                Deleted = deletedValue,
                DeletedBy = deletedByValue,
                DeletedDate = deletedDateValue,
                Description = descriptionValue,
                Pilote = piloteValue,
                NumAvion = numAvionValue,
            };

            // Assert
            volEntity.Id.Should().Be(idValue);
            volEntity.CreationDate.Should().Be(creationDateValue);
            volEntity.CreatedBy.Should().Be(createdByValue);
            volEntity.UpdateDate.Should().Be(updateDateValue);
            volEntity.UpdatedBy.Should().Be(updatedByValue);
            volEntity.Deleted.Should().Be(deletedValue);
            volEntity.DeletedBy.Should().Be(deletedByValue);
            volEntity.DeletedDate.Should().Be(deletedDateValue);
            volEntity.Description.Should().Be(descriptionValue);
            volEntity.Pilote.Should().Be(piloteValue);
            volEntity.NumAvion.Should().Be(numAvionValue);
        }
    }
}