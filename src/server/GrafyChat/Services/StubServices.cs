using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Linq;

namespace GrafyChat.Services
{
    public class Entity
    {
        public Guid Id { get; set; }
    }

    public class Message : Entity
    {
        public Guid AuthorId { get; set; }
        public string Text { get; set; }
    }

    public class User : Entity
    {
        public string Name { get; set; }
    }


    public class Service<TValue>
        where TValue : Entity
    {
        public List<TValue> Values { get; } = new List<TValue>();

        public TValue[] Get(int count)
        {
            return this.Values
                .TakeLast(count)
                .ToArray();
        }

        public TValue Add(TValue item)
        {
            item.Id = Guid.NewGuid();

            this.Values.Add(item);

            return item;
        }

        public TValue? GetBytId(Guid id)
        {
            return this.Values.FirstOrDefault(o => o.Id == id);
        }
    }

    public class UserService : Service<User>
    {
    }

    public class MessageService : Service<Message>
    {
    }
}