## BSA REACT #1
###React компоненты:
- ``AddUser`` - рендерит поле ввода имени и кнопку, добавляет нового пользователя.
- ``User`` - рендерит блок с информацией об одном пользователе.
- ``UserList`` - рендерит блок всех пользователей, в случае если их нету (все удалены либо фильтр поиска пуст) рендерит сообщение `There is no users!`.
- ``App`` - главный компонент, рендерит компоненты ``AddUser, UserList`` и предоставляет обработчики для дочерних компонетов в виде `props` 