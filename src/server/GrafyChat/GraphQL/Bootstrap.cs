using GrafyChat.GraphQL.Messages;
using HotChocolate;
using HotChocolate.Types;
using Microsoft.Extensions.DependencyInjection;

namespace GrafyChat.GraphQL
{
    public static class Bootstrap
    {
        public static IServiceCollection AddGrafyChat(this IServiceCollection serviceCollection)
        {
            serviceCollection.AddGraphQL(o =>
                SchemaBuilder
                    .New()
                    .AddSubscriptionType<GraphQLQueryType>()
                    .Create());
            
            return serviceCollection;
        }
    }

    public class GraphQLQueryType : ObjectType
    {
        protected override void Configure(IObjectTypeDescriptor descriptor)
        {
            descriptor.Name("Query");
            descriptor.Include<MessageResolver>();
        }
    }
}