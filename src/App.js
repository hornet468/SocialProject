import './App.css';

const App = () => {
  return (
    <div className ='app-wrapper'>
    <header className ='header'>
       <img src="https://th.bing.com/th?id=OIF.FFhkOYTPIWMRo9kdyk%2b1ZQ&rs=1&pid=ImgDetMain"/>
    </header>
      <nav className ='navbar'>
        <div>
        <a>Profile</a>
        </div>
        <div>
        <a>Messages</a>
        </div>
        <div>
        <a>News</a>
        </div>
        <div>
        <a> Music</a></div>
        <div>
        <a>Settings</a>
        </div>
      </nav>
      <div className ="content">
       <div>
        <img 
          src='https://th.bing.com/th/id/OIP.HLuY60jzx5puuKjbqmWRRwHaEK?rs=1&pid=ImgDetMain'
        />
       </div>
       <div>
          ava + description
       </div>
       <div>
        My posts
        <div>
        New post
        </div>
        <div>
         post 1
        </div>
        <div>
         post 2
        </div>
       </div>
      </div>
    </div>
  );
};


export default App;
