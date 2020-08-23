using GrafyChat.GraphQL.Messages;
using GrafyChat.GraphQL.Users;
using HotChocolate;
using HotChocolate.AspNetCore.Subscriptions;
using HotChocolate.Types;
using Microsoft.Extensions.DependencyInjection;

namespace GrafyChat.GraphQL
{
    public static class Bootstrap
    {
        public static IServiceCollection AddGrafyGraphQL(this IServiceCollection serviceCollection)
        {
            serviceCollection.AddGraphQL(o =>
                SchemaBuilder
                    .New()
                    .AddServices(o)
                    .AddQueryType<GraphQLQueryType>()
                    .AddMutationType<GraphQLMutationType>()
                    .AddSubscriptionType<GraphQlSubscriptionType>()
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
    
    public class GraphQLMutationType : ObjectType
    {
        protected override void Configure(IObjectTypeDescriptor descriptor)
        {
            descriptor.Name("Mutation");
            descriptor.Include<MessageMutation>();
            descriptor.Include<UserMutation>();
        }
    }
    
    public class GraphQlSubscriptionType : ObjectType
    {
        protected override void Configure(IObjectTypeDescriptor descriptor)
        {
            descriptor.Name("Subscription");
            descriptor.Include<MessageSubscription>();
        }
    }
}