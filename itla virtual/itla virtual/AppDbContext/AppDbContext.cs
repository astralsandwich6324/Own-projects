using Microsoft.EntityFrameworkCore;

namespace itla_virtual.AppDbContext
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) 
        {
        
        }


    }

    
}
