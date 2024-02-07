using Core.Entities;
using System.Collections.Generic;

namespace Core.Domains
{
    public class FamilleDomain
	{
        public string Numero { get; set; }
        public double Montant { get; set; }

        public List<PassagereEntity> Members { get; set; }
	}
}
