using Core.Entities;
using Core.Interfaces;
using Core.Services;
using DocumentFormat.OpenXml.Vml.Office;
using FluentAssertions;
using Infrastructure.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualStudio.TestPlatform.ObjectModel;
using Microsoft.VisualStudio.TestPlatform.Utilities;
using Moq;
using Xunit.Abstractions;
using static Utility.Enums;

namespace Projet_TUI.Infrastructure.Tests.Repositories
{
    public class BaseRepositoryTest
    {
        IUnitOfWork _unitOfWork;
        UserHelperService _userHelperService;
        AppDbContext _appDbContext;
        private readonly ITestOutputHelper _output;
        // Constructeur pour initialiser les dépendances
        public BaseRepositoryTest(ITestOutputHelper output)
        {

            // Créez un mock de IHttpContextAccessor
            var httpContextAccessorMock = new Mock<IHttpContextAccessor>();
            var options = new DbContextOptionsBuilder<AppDbContext>()
                .UseInMemoryDatabase(databaseName: "TestProjetTUIDatabase")
                .Options;
            _appDbContext = new AppDbContext(options); 
            _userHelperService = new UserHelperService(httpContextAccessorMock.Object); 
            _unitOfWork = new UnitOfWork(_appDbContext, _userHelperService);
            _output = output;
        }

        [Fact]
        public async Task AddAsync_Should_AddEntity_And_ReturnEntity()
        {
            Assert.NotNull(_unitOfWork);

            // Arrange
            int idValue = 1;
            DateTime creationDateValue = DateTime.Now;
            Guid createdByValue = Guid.NewGuid();
            DateTime updateDateValue = DateTime.Now;
            Guid updatedByValue = Guid.NewGuid();
            bool deletedValue = false;
            DateTime? deletedDateValue = null;
            Guid? deletedByValue = null;

            string nomValue = "Test Nom";
            TypePassagere typeValue = TypePassagere.Adulte;
            int ageValue = 26;
            bool doublePlacesValue = false;
            string familleIdValue = "-";
            int volIdValue = 1;

            // Act
            var entity = new PassagereEntity
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




            // Act
            var result = await _unitOfWork._passagereService.AddAsync(entity);

            // Assert
            result.Should().Be(entity);
            // Affichage nom et  age           

            _output.WriteLine(result.Nom.ToString());
            _output.WriteLine(result.Age.ToString());

        }

        [Fact]
        public async Task UpdateAsync_Should_AddEntity_And_ReturnEntity()
        {
            Assert.NotNull(_unitOfWork);

            // Arrange
            int idValue = 1;
            DateTime creationDateValue = DateTime.Now;
            Guid createdByValue = Guid.NewGuid();
            DateTime updateDateValue = DateTime.Now;
            Guid updatedByValue = Guid.NewGuid();
            bool deletedValue = false;
            DateTime? deletedDateValue = null;
            Guid? deletedByValue = null;

            string nomValue = "Test Nom";
            TypePassagere typeValue = TypePassagere.Adulte;
            int ageValue = 26;
            bool doublePlacesValue = false;
            string familleIdValue = "-";
            int volIdValue = 1;

            // Act
            var entity = new PassagereEntity
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

            // Act
            var result = await _unitOfWork._passagereService.AddAsync(entity);



            DateTime updateDateNewValue = DateTime.Now;
            Guid updatedByNewValue = Guid.NewGuid();

            string nomValueNew = "Test Nom 2";
            TypePassagere typeValueNew = TypePassagere.Enfant;
            int ageValueNew = 4;


            var getEntity = await _unitOfWork._passagereService.GetByIdAsync(result.Id);
            // Affichage old nom et  age  
            _output.WriteLine(getEntity.Nom.ToString());
            _output.WriteLine(getEntity.Age.ToString());

            getEntity.UpdateDate = updateDateNewValue;
            getEntity.UpdatedBy = updatedByNewValue;
            getEntity.Nom = nomValueNew;
            getEntity.Type = typeValueNew;
            getEntity.Age = ageValueNew;


            // Act
            var Newresult = await _unitOfWork._passagereService.UpdateAsync(entity);

            // Assert
            Newresult.Should().Be(getEntity);
            // Affichage new nom et  age           

            _output.WriteLine(Newresult.Nom.ToString());
            _output.WriteLine(Newresult.Age.ToString());

        }
    }
}
