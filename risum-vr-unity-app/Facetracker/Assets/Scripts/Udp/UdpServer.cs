using UnityEngine;
using System.Collections;
using System.Net;
using System.Net.Sockets;
using System.Text;
using System.Threading;

public class UdpServer : MonoBehaviour 
{
	// public
	public int port = 8808;

	// private
	private IPEndPoint ip;
	private byte[] data = new byte[1];
	private EndPoint remote;
	private Socket newsock;
	private Thread thread;


	void Update()
	{
		// чтоьы запустить сервер нажми S
		if (Input.GetKeyDown(KeyCode.S))
			StartServer();
	}

	void OnDestroy()
	{
		StopServer();
	}

	// запуск сервера
	public void StartServer()
	{
		ip = new IPEndPoint(IPAddress.Any, port);

		newsock = new Socket(AddressFamily.InterNetwork, SocketType.Dgram, ProtocolType.Udp);
	    newsock.Bind(ip);
		remote = (EndPoint)(ip);

		thread = new Thread(new ThreadStart(ReceiveServer));
		thread.IsBackground = true;
		thread.Start();
	}

	// остановка сервера
	public void StopServer()
	{
		if (thread.IsAlive)
			thread.Abort();

		newsock.Close();
	}

	// слушатель сервера
	void ReceiveServer()
	{
	    while (true)
	    {
			data = new byte[1];
			var recv = newsock.ReceiveFrom(data, ref remote);
			Debug.Log(Encoding.ASCII.GetString(data, 0, recv));
	    }
	}

}
