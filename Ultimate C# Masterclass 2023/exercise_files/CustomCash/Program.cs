
var dataDownloader = new SlowDataDownloader();

System.Console.WriteLine(dataDownloader.DownloadData("id1"));
System.Console.WriteLine(dataDownloader.DownloadData("id2"));
System.Console.WriteLine(dataDownloader.DownloadData("id3"));
System.Console.WriteLine(dataDownloader.DownloadData("id1"));
System.Console.WriteLine(dataDownloader.DownloadData("id3"));
System.Console.WriteLine(dataDownloader.DownloadData("id1"));
System.Console.WriteLine(dataDownloader.DownloadData("id2"));

Console.ReadKey();

public interface IDataDownloader
{
    string DownloadData(string resourceId);
}
public class SlowDataDownloader : IDataDownloader
{
    public string DownloadData(string resourceId)
    {
        //let's imagine this method downloads real data, 
        //and it does it slowly
        Thread.Sleep(1000);
        return $"Some data for {resourceId}";
    }
}