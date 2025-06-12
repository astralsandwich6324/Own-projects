using System.Text.Json;

namespace itla_virtual.Models
{
    public class FileHandler
    {
        public static async Task SaveJsonToFileAsync(DataQuestion dataQuestion)
        {

            string directoryPath = Path.Combine(Directory.GetCurrentDirectory(), "data");

            string filePath = Path.Combine(directoryPath, "postData.json");

            if (!Directory.Exists(directoryPath))
            {
                Directory.CreateDirectory(directoryPath);
            }

            string jsondata = JsonSerializer.Serialize(dataQuestion);

            await File.WriteAllTextAsync(filePath, jsondata);

        }
    }
}




    


    

