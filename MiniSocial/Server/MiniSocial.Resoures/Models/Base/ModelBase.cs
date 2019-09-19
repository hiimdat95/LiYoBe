using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;

namespace MiniSocial.Resoures.Models
{
    public class ModelBase
    {
        [BsonId]
        public ObjectId Id { get; set; }
        [BsonDateTimeOptions(Kind =DateTimeKind.Utc)]
        public DateTime UpdateAt { get; set; }


    }
}