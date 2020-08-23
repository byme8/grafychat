using HotChocolate.Subscriptions;

namespace GrafyChat.GraphQL.Messages
{
    public class MessageSubscription
    {
        public Message OnMessage(IEventMessage message)
        {
            var messageEntity = (Services.Message) message.Payload;

            return new Message
            {
                Id = messageEntity.Id,
                Text = messageEntity.Text,
                AuthorId = messageEntity.AuthorId
            };
        }
    }
}