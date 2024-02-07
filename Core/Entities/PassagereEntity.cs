using static Utility.Enums;

namespace Core.Entities
{
    public class PassagereEntity : BaseEntity
    {
		public string Nom { get; set; }

		public TypePassagere Type { get; set; } // "adulte", "enfant"
        public int Age { get; set; }
        public bool DoublePlaces { get; set; }
        public string FamilleId { get; set; }
        public int VolId { get; set; }

	}
}
