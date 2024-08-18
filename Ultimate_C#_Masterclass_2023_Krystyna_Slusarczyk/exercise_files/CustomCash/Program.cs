
// IDataDownloader dataDownloader = new SlowDataDownloader();

IDataDownloader dataDownloader = new CachingDataDownloader(new PrintingDataDownloader(new SlowDataDownloader()));

System.Console.WriteLine(dataDownloader.DownloadData("id1"));
System.Console.WriteLine(dataDownloader.DownloadData("id2"));
System.Console.WriteLine(dataDownloader.DownloadData("id3"));
System.Console.WriteLine(dataDownloader.DownloadData("id1"));
System.Console.WriteLine(dataDownloader.DownloadData("id3"));
System.Console.WriteLine(dataDownloader.DownloadData("id1"));
System.Console.WriteLine(dataDownloader.DownloadData("id2"));

Console.ReadKey();

public class Cache<TKey, TData>
{
    private readonly Dictionary<TKey, TData> _cachedData = new();
    public TData Get(TKey key, Func<TKey, TData> getForTheFirstTime)
    {
        if (!_cachedData.ContainsKey(key))
        {
            _cachedData[key] = getForTheFirstTime(key);
        }
        return _cachedData[key];
    }
}

public interface IDataDownloader
{
    string DownloadData(string resourceId);
}

public class PrintingDataDownloader : IDataDownloader //BOTH IMPLEMENTS THE SAME INTERFACE CLASS
{
    //INTERNALIZE THE CLASS OF INTEREST
    private readonly IDataDownloader _dataDownloader;

    //CLASS CONSTRUCTOR 
    public PrintingDataDownloader(IDataDownloader dataDownloader)
    {
        _dataDownloader = dataDownloader;
    }

    //IMPLEMENT INTERFACE FUNCTION DOWNLOADDATA()
    public string DownloadData(string resourceId)
    {
        var data = _dataDownloader.DownloadData(resourceId);
        System.Console.WriteLine("Data is ready! ");
        return data;
    }
}

public class CachingDataDownloader : IDataDownloader //BOTH IMPLEMENTS THE SAME INTERFACE CLASS
{
    //INTERNALIZE THE CLASS OF INTEREST
    private readonly IDataDownloader _dataDownloader;
    private readonly Cache<string, string> _cache = new();

    //CLASS CONSTRUCTOR 
    public CachingDataDownloader(IDataDownloader dataDownloader)
    {
        _dataDownloader = dataDownloader;
    }

    //IMPLEMENT INTERFACE FUNCTION DOWNLOADDATA()
    public string DownloadData(string resourceId)
    {
        return _cache.Get(resourceId, _dataDownloader.DownloadData);
    }
}

public class SlowDataDownloader : IDataDownloader //BOTH IMPLEMENTS THE SAME INTERFACE CLASS
{
    public string DownloadData(string resourceId)
    {
        //let's imagine this method downloads real data, 
        //and it does it slowly
        Thread.Sleep(1000);
        return $"Some data for {resourceId}";
    }
}