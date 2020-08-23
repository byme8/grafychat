using System.Threading.Tasks;
using GrafyChat.Services;

namespace GrafyChat.GraphQL.Users
{
    public class UserMutation
    {
        private readonly UserService service;

        public UserMutation(UserService service)
        {
            this.service = service;
        }

        public async Task<User> AddUser(string name)
        {
            var user = service.Add(new Services.User()
            {
                Name = name
            });

            return new User()
            {
                Id = user.Id,
                Name = user.Name,
            };
        }
    }
}