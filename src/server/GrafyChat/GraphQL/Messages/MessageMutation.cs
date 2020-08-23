using System;
using System.Threading.Tasks;
using GrafyChat.Services;
using HotChocolate;
using HotChocolate.Subscriptions;

namespace GrafyChat.GraphQL.Messages
{
    public class MessageMutation
    {
        private readonly MessageService service;

        public MessageMutation(MessageService service)
        {
            this.service = service;
        }

        public async Task<Message> AddMessage(string text, Guid authorId, [Service] IEventSender sender)
        {
            var message = service.Add(new Services.Message
            {
                Text = text,
                AuthorId = authorId
            });

            await sender.SendAsync(new EventMessage("onMessage", message));

            return new Message
            {
                Id = message.Id,
                Text = message.Text,
                AuthorId = message.AuthorId
            };
        }
    }
}