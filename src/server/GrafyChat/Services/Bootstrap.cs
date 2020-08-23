using Microsoft.Extensions.DependencyInjection;

namespace GrafyChat.Services
{
    public static class Bootstrap
    {
        public static IServiceCollection AddGrafyServices(this IServiceCollection serviceCollection)
        {
            serviceCollection.AddSingleton<UserService>();
            serviceCollection.AddSingleton<MessageService>();
            
            return serviceCollection;
        }
    }
}