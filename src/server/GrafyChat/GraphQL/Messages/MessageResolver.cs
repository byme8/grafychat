using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using GrafyChat.GraphQL.Users;
using GrafyChat.Services;
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

    public class MessageResolver
    {
        public IEnumerable<Message> Messages(int count, [Service] MessageService service)
        {
            return service.Get(count).Select(o => new Message
            {
                Id = o.Id,
                Text = o.Text,
                AuthorId = o.AuthorId
            }).ToArray();
        }
    }
}