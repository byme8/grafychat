using System;
using GrafyChat.Services;
using HotChocolate;
using HotChocolate.Resolvers;
using Message = GrafyChat.GraphQL.Messages.Message;

namespace GrafyChat.GraphQL.Users
{
    public class User
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
    }
    
    public class UserResolver
    {
        public User Author([Parent] Message message, [Service] UserService service, IResolverContext context)
        {
            var user = service.GetBytId(message.AuthorId);
            if (user is null)
            {
                context.ReportError($"User with id {message.Id} not found.");
                return new User();
            }

            return new User
            {
                Id = user.Id,
                Name = user.Name
            };
        }
    }
}