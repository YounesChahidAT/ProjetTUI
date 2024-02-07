using System;
using System.ComponentModel;
using System.Reflection;

namespace Utility.Extensions
{
    public static class HelperMethods
    {
        public static string DisplayName(this Enum value)
        {
            try
            {
                if (value == null)
                {
                    return null;
                }

                FieldInfo field = value.GetType().GetField(value.ToString());

                if (field == null)
                {
                    return null;
                }

                DescriptionAttribute[] attributes = (DescriptionAttribute[])field.GetCustomAttributes(typeof(DescriptionAttribute), false);
                if (attributes.Length > 0)
                {
                    return attributes[0].Description;
                }
                return value.ToString();
            }
            catch (Exception)
            {
                return "";
            }
        }
       
    }
}
