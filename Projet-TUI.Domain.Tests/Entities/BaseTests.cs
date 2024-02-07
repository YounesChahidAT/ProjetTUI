namespace Projet_TUI.Domain.Tests.Entities
{
    public class BaseTests
    {
        [Fact]
        public void BaseEntity_ShouldSetPropertiesCorrectly()
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

            // Act
            var volEntity = new BaseEntity
            {
                Id = idValue,
                CreationDate = creationDateValue,
                CreatedBy = createdByValue,
                UpdateDate = updateDateValue,
                UpdatedBy = updatedByValue,
                Deleted = deletedValue,
                DeletedBy = deletedByValue,
                DeletedDate = deletedDateValue,
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
        }
    }
}