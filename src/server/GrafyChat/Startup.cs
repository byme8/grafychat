using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GrafyChat.GraphQL;
using GrafyChat.Services;
using HotChocolate;
using HotChocolate.AspNetCore;
using HotChocolate.AspNetCore.Subscriptions;
using HotChocolate.AspNetCore.Voyager;
using HotChocolate.Subscriptions;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.WebSockets;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace GrafyChat
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddGrafyGraphQL();

            services.AddGraphQLSubscriptions();
            services.AddInMemorySubscriptionProvider();

            services.AddGrafyServices();

            services.AddControllers();
            services.AddWebSockets(o => { });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseCors(o => o
                .AllowAnyOrigin()
                .AllowAnyHeader()
                .AllowAnyMethod());

            app.UseRouting();
            app.UseWebSockets();
            app.UseGraphQL("/g")
               .UsePlayground("/g")
               .UseVoyager("/g");

            app.UseGraphQLSubscriptions();

            app.UseEndpoints(endpoints => endpoints.MapControllers());
        }
    }
}