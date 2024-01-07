import './App.css';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <header className="header">
          <div className="header__top">
            <div className="header__container">
              <div className="header__content">
                <a className="header__logo logo _dynamic_adapt_" href="/" data-da=".header__content, 1230, 0">
                </a>
              </div>
            </div>
          </div>
          <div className="header__bottom">
            <div className="header__container">
              <nav className="header__nav">


                <ul className="header__menu menu">
                  <li>
                    <a className="active sel" href="/about">
                      Прейскурант
                    </a>
                  </li>
                  <li>
                    <a className="active sel" href="/school">
                      Новости
                    </a>
                  </li>
                  <li>
                    <a className="active sel" href="/gifts">
                      Время работы
                    </a>
                  </li>
                  <li>
                    <a className="active sel" href="/contacts">
                      Контакты
                    </a>
                  </li>
                </ul>

                <div className="header__mobile">
                  <div className="header__mobile-top">

                  </div>
                </div>
              </nav>
            </div>

          </div>
        </header >
      </div >

      <main className="page ">


        <section className="promo promo--corporate">
          <div className="promo__container">
            <div className="breadcrumbs">
              <a className="breadcrumbs__backlink" href="#" aria-label="Назад">
              
              </a>
              <ul>
                <li>
                  <a href="/">Главная</a>
                </li>
                <li>
                  <span></span>
                </li>
              </ul>
            </div>

            <div className="promo__content">
              <div className="promo__info">
                <h1 className="promo__title title title--h2">Издание книг под заказ: ваша идея, наша реализация</h1>
                <p className="promo__text"> Добро пожаловать в книжное издательство "Новые Горизонты"!
                </p>
                <p className="promo__text">
                  Мы являемся молодым и динамично развивающимся издательством, посвященным созданию и изданию качественной литературы для широкой аудитории
                </p>
                <p className="promo__text">
                  Наше издательство специализируется на разнообразных жанрах, включая художественную литературу, научно-популярные книги, детскую литературу, и многое другое.<br /></p><div> </div>

              </div>
              <img className="promo__img" width="508" height="525" src="https://cache3.youla.io/files/images/720_720_out/5d/7e/5d7e20d12aecd64a9f66f5d9.jpg" alt="image" />
            </div>


            <ul className="promo__cards">
              <li className="promo__card card">
              

                <strong className="promo__card-title card__title">
                  Книги
                </strong>

                <span className="card__descr">
                  10.000+ экземпляров
                </span>
              </li>

              <li className="promo__card card">
           

                <strong className="promo__card-title card__title">
                  Брошюры
                </strong>

                <span className="card__descr">
                  Найдутся любые на ваш вкус
                </span>
              </li>

              <li className="promo__card card">
             
                <strong className="promo__card-title card__title">
                  Журналы
                </strong>
                <span className="card__descr">
                  Для всеx возрастов
                </span>
              </li>
            </ul>
          </div>
        </section>



        <section className="promo promo--birthday">
          <div className="promo__container">
            <div className="promo__content">
              <img width="569" height="637" className="promo__img" src="https://static.independent.co.uk/2021/10/13/14/iStock-1314146312.jpg?width=1024&auto=webp" alt="birthday" />

              <div className="promo__info">
                <h2 className="promo__title title title--h2">Персонализированный подход к изданию вашей книги</h2> 							<p className="promo__text"> Если у вас есть готовая рукопись, мы можем помочь вам привести её к издательскому виду, создавая профессиональный макет и обложку.</p> 			<p className="promo__text">	Мы также можем организовать печать вашей книги в различных форматах и тиражах, чтобы она соответствовала вашим потребностям </p>      <p className="promo__text"> Кроме того, мы можем помочь с распространением вашей книги через онлайн-книжные магазины и другие каналы продаж. </p>                    <p className="promo__text">  Украсьте свой праздник свежими впечатлениями!  </p>
              </div>
            </div>


            <div className="promo__banner card">
              <strong className="promo__heading">
                Для связи с менеджером звоните по телефону
              </strong>
              <a className=" button" href="tel:+79033920988">+79033920988
              </a>
            </div>
          </div>
        </section>

        <section className="promo promo--agency">
          <div className="promo__container">
            <div className="promo__content">
              <div className="promo__info">
                <h2 className="promo__title title title--h2"> Воплотите свои книжные мечты вместе с нами </h2>  <p className="promo__text"> В нашем издательстве мы предлагаем широкий спектр услуг по изданию книг под заказ. </p> <p className="promo__text">	 Мы работаем с авторами, которые хотят опубликовать свои произведения, независимо от жанра или тематики. Наша команда профессионалов готова помочь вам воплотить вашу книжную идею в реальность </p>  <p className="promo__text">  Мы предлагаем услуги по верстке текста, дизайну обложки, печати и распространению книг </p><p className="promo__text">  	</p>
              </div>

              <img width="500" height="500" className="promo__img" src="https://thumbs.dreamstime.com/b/%D0%B7%D0%B0%D0%BA%D0%BE%D0%BD%D0%BD%D0%BE%D0%B5-%D0%B8%D1%81%D1%81%D0%BB%D0%B5%D0%B4%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-8076459.jpg" alt="agency" />
            </div>
          </div>
        </section>
      </main>


      <footer className="footer">
        <div className="footer__top">
          <div className="footer__container">
            <div className="footer__content">
              <address className="footer__address">
                <a className="footer__logo logo" href="/">
                </a>
                <ul className="footer__contacts" >
                  <li>
                    <a className="link link--phone" href="tel:79033920988">+79033920988</a>
                  </li>
                  <li>
                    <a className="link link--mail" href="mailto:horizon@gmail.com">
                      horizon@gmail.com
                    </a>
                  </li>
                </ul>
              </address>
              <div className="footer__mobile-menu">
                <ul data-spollers="" className="spollers _spoller-init">
                  <li className="spollers__item footer__mobile-item">
                    <button type="button" data-spoller="" className="footer__spoller spollers__title">Посетителям</button>
                    <div className="spollers__body" hidden="">
                      <ul className="footer__list">
                        <li>
                          <a className="active sel" href="">
                            Время посещения
                          </a>
                        </li>                                                                                               <li>
                          <a className="active sel" href="">
                            Новости
                          </a>
                        </li>
                        <li>
                          <a className="active sel" href="">
                            Праздники
                          </a>
                        </li>
                        <li>
                          <a className="active sel" href="">
                            Мастер-классы
                          </a>
                        </li>
                        <li>
                          <a className="active sel" href="">
                            Новинки
                          </a>
                        </li>
                        <li>
                          <a className="active sel" href="">
                            Контакты
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>



                </ul>
              </div>

              <div className="footer__about">

                <ul className="footer__socials socials">


                  <li>
                    <a className="socials__link socials__link--big" href="" >
                      <img src="https://progulka-v-temnote.ru/img/icons/telegram.png"  style={{ height: "48px" }} />
                    </a>
                  </li>
                  <li>
                    <a className="socials__link socials__link--big" href="" >
                      <img src="https://progulka-v-temnote.ru/img/icons/whatsapp-gray.png" style={{ height: "40px" }} />
                    </a>
                  </li>
                </ul>


              </div>

              <div className="footer__menu">
                <ul className="footer__list">
                  <li>
                    <a className="active sel" href="">
                      Время работы
                    </a>
                  </li>
                  <li>
                    <a className="active sel" href="">
                      Новости
                    </a>
                  </li>
                  <li>
                    <a className="active sel" href="">
                      Праздники
                    </a>
                  </li>


                  <li>
                    <a className="active sel" href="">
                      Новинки
                    </a>
                  </li>
                  <li>
                    <a className="active sel" href="">
                      Контакты
                    </a>
                  </li>
                </ul>

              </div>


            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__container">
            <div className="footer__info">
              <p>
                © 2006-2023 ООО "Новые горизонты". Все права защищены.
              </p>

              <ul className="footer__submenu">
                <li>
                  <a href="">
                    Пасхалка
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer >




    </div>
  );
}

export default App;
