using System;
using System.Collections.Generic;
using System.Linq;
using HotChocolate;

namespace GrafyChat.GraphQL.Messages
{
    [GraphQLResolver(typeof(UserResolver))]
    public class Message
    {
        public Guid Id { get; set; }
        public Guid AuthorId { get; set; }
        public string Text { get; set; }
    }

    public class User
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
    }

    public class MessageResolver
    {
        public IEnumerable<Message> GetMessages(int count)
        {
            var authorId = Guid.NewGuid();
            var text = "Text " + authorId;
            return Enumerable.Range(0, count).Select(o =>
                new Message
                {
                    Id = Guid.NewGuid(),
                    Text = text,
                    AuthorId = authorId
                });
        }
    }

    public class UserResolver
    {
        public User GetAuthor([Parent] Message message)
        {
            return new User
            {
                Id = message.AuthorId,
                Name = message.AuthorId.ToString()
            };
        }
    }
}