import {NavLink, Link, Outlet} from 'react-router-dom';

const Layout = (props) => {
  const {listCategory} = props;
  
  return (
    <>
      <header className="header">
        <Link to="/" className="myLink white">Online Store</Link>
        <nav className="navbar navbar-expand-md navbar-dark">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Переключатель навигации">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {listCategory?.length &&
                  listCategory?.map((category, index) => {
                    return (
                      <li className="nav-item" key={index}>
                        <NavLink className="nav-link" aria-current="page" to={`/category/${category}`}>{category}</NavLink>
                      </li>
                    )
                  })
                }
                <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to={`/about/`}>About</NavLink>
                </li>  
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main className="mainContent">
        <Outlet />
      </main>
      
      <footer className="footer">
        <p>2024&copy; Thanks to <Link to="https://fakestoreapi.com" className="myLink white">Fakestoreapi</Link> for data for my store.</p>
        <div class="social">
          <ul>
              <li><a href="https://instagram.com" target="_blank" class="social-link instagram"></a></li>
              <li><a href="https://facebook.com" target="_blank" class="social-link facebook"></a></li>
              <li><a href="https://twitter.com" target="_blank" class="social-link twitter"></a></li>
              <li><a href="https://youtube.com" target="_blank" class="social-link youtube"></a></li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Layout;