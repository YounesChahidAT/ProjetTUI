using System.ComponentModel;

namespace Utility
{
	public static class Enums
	{
        public enum TypePassagere
        {
            [Description("Adulte")]
            Adulte = 1,
            [Description("Enfant")]
            Enfant = 2
        }
        public enum DeleteType
        {
            logique = 1,
            physique = 2
        }
        public enum ResultLogin
        {
            Success = 1,
            Fail = 2
        }
    }
}
