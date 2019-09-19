using MiniSocial.Resoures.Models;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MiniSocial.Resoures.Data
{
    public class DataContext
    {
        private MongoClient mongoClient { get; }
        private IMongoDatabase database { get; }
        public DataContext(string connectionString, string dbName)
        {
            mongoClient = new MongoClient(connectionString);
            database = mongoClient.GetDatabase(dbName);
        }

        public IMongoCollection<Post> Posts => database.GetCollection<Post>("posts");

    }
}
