using Microsoft.Extensions.FileProviders;
using OrderTrackingWebAPI;

namespace OrderTrackingWebAPI
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();
            builder.Services.AddCors(c =>
            {
                c.AddPolicy("AllowOrigin", options => options.AllowAnyOrigin().AllowAnyHeader().AllowAnyHeader());
            });

            //builder.Services.AddControllersWithViews().AddNewtonsoftJson(options => options.SerializerSettings
            //                                                                    .ReferenceLoopHandling = Newtonsoft.Json
            //                                                                    .ReferenceLoopHandling
            //                                                                    .Ignore)
            //                                                                    .AddNewtonsoftJson(options => options.SerializerSettings.ContractResolver = new DefaultContractResolver());

            var app = builder.Build();

            app.UseCors(options => options.AllowAnyOrigin().AllowAnyHeader().AllowAnyHeader());

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();

            app.UseStaticFiles();

            app.MapControllers();

            app.Run();
        }
    }
}