using Core.Entities;
using System.Collections.Generic;

namespace Core.Domains
{
    public class AvionDomain
	{
        public double Montant { get; set; }

        public List<PassagereEntity> Members { get; set; }
	}
}
