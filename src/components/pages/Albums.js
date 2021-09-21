import React,{useState,useEffect} from 'react';
import axios from 'axios';
import '../../css/spiner.css';
import '../../css/table.css';
import '../../css/album.css';

export function Albums(){

    const [albums, setAlbums] = useState([]);

    useEffect(()=>{
      axios.get("https://jsonplaceholder.typicode.com/albums")
      .then(result => {setAlbums(result.data)})
      .catch(err => alert(err))
  
    },[])
    
    return(
        <div id="album">
            {albums.length > 0 ? 
                <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {albums.map((album)=>{
                        return(
                            <tr key={album.id}>
                                <td>{album.id}</td>
                                <td>{album.title}</td>
                            </tr>
                        )
                    })}
                </tbody> 
            </table> : <div class="lds-hourglass"></div>}
        </div>
    )
}

