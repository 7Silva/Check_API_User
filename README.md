<div align='start'>
  <h1>Check API User</h1><p>An API to verify users in your database</p>
</div>

## Dependencies

```npm
npm install
```

## Functions

<table>
    <tbody>
        <td>Database Connect</td>
        <td>✅</td>
    </tbody>
    <tbody>
        <td>Check User exists</td>
        <td>✅</td>
    </tbody>
    <tbody>
        <td>404 Home Page</td>
        <td>✅</td>
    </tbody>
    <tbody>
        <td>Passoword Encoder</td>
        <td>✅</td>
    </tbody>
</table>

## Database
<p>Your database must have the following columns.</p>

```
╔users
╚╗
 ║ 
 ╠══id (Int(11), Primary Key, Autoincrement)
 ║ 
 ╠══email (Varchar(255), NULL, nullable)
 ║ 
 ╠══user (Varchar(255), NULL, nullable)
 ║ 
 ╠══password (Varchar(255))
 ╚end
```

## Extras
<img src='https://github.com/7Silva/Check_API_User/blob/main/github/imgs/401%20Error.gif' width=400px alt='Ilustrator'></img>
<img src='https://github.com/7Silva/Check_API_User/blob/main/github/imgs/404%20Error.gif' width=400px alt='Ilustrator'></img>

## License
API User Create is released under [the MIT License](LICENSE). Check [LICENSE](LICENSE) file for more information.