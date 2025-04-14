## Практично-лабораторне заняття №4

# Реалізація нової сутності, створення CRUD-операцій та відповідного RESTful API

**Мета:** Закріпити навички створення повноцінної серверної логіки для роботи з новою сутністю за допомогою TypeORM, Express
та TypeDI. Ознайомитися з процедурою створення міграцій, перевірки змін у структурі бази даних та тестування REST API через Postman.

### Що було реалізовано?

1. Було реалізовано створення нової сутності під назвою Post з полями:

   - id - number
   - title - string
   - description - string
   - user - обʼєкт сутності User
   - createdAt - Date
   - updatedAt - Date
<img width="750" alt="Screenshot 2025-04-14 at 20 18 56" src="https://github.com/user-attachments/assets/0108c3bd-b72f-4f97-a93e-07f1998101ad" />

2. Після цього я згенерував міграцію для оновлення бази даних(додавання таблиці posts).
<img width="1359" alt="Screenshot 2025-04-06 at 20 34 25" src="https://github.com/user-attachments/assets/9e448b99-521b-427e-a338-4e13367aed50" />
<img width="344" alt="Screenshot 2025-04-06 at 20 34 52" src="https://github.com/user-attachments/assets/56c84fb5-7e47-4ba8-bac3-54b81d9d4cca" />

3. Запустив її та перевірив базу даних на наявність нової таблиці. Зміни були застосовані.
<img width="1384" alt="Screenshot 2025-04-06 at 20 27 21" src="https://github.com/user-attachments/assets/04b227fa-e2b8-4a03-94d4-966843590c6b" />
<img width="347" alt="Screenshot 2025-04-14 at 20 22 45" src="https://github.com/user-attachments/assets/35213a42-9818-4955-b82f-35f5013f61cb" />
<img width="1099" alt="Screenshot 2025-04-14 at 20 23 02" src="https://github.com/user-attachments/assets/4c5bb6b4-ee40-44c0-bc8c-6c1e52df3586" />

4. Створення контролерів для операцій CRUD для нової сутності Post.

<img width="266" alt="Screenshot 2025-04-07 at 14 44 52" src="https://github.com/user-attachments/assets/be559dfd-b29f-4063-a329-15b9caa13dd2" />

5. Додавання нових ендпоінтів до Postman
<img width="941" alt="Screenshot 2025-04-14 at 20 27 59" src="https://github.com/user-attachments/assets/11b3a8ca-4c5a-4189-8239-917083726022" />
<img width="303" alt="Screenshot 2025-04-14 at 20 28 34" src="https://github.com/user-attachments/assets/9ad79953-bdf5-47a4-8bcc-27cb4f2f9d3f" />
<img width="1011" alt="Screenshot 2025-04-14 at 20 29 15" src="https://github.com/user-attachments/assets/3f6349a3-8196-4991-9e34-23b950033d16" />
<img width="1017" alt="Screenshot 2025-04-14 at 20 29 23" src="https://github.com/user-attachments/assets/9f05f53f-13bc-4a5c-a327-bd2bcb3cf5af" />
<img width="1009" alt="Screenshot 2025-04-14 at 20 29 42" src="https://github.com/user-attachments/assets/f9c77862-a581-48a8-b1ce-aa6dc0d68e6f" />
<img width="1018" alt="Screenshot 2025-04-14 at 20 30 10" src="https://github.com/user-attachments/assets/a13d422d-99e4-42f2-8a8a-aeb0c8dae6a1" />
<img width="1012" alt="Screenshot 2025-04-14 at 20 30 31" src="https://github.com/user-attachments/assets/64bf1376-8a64-479c-a1e0-caa38ffce75c" />

6. Створення поля posts для сутності User, створення міграції та її запуск
<img width="544" alt="Screenshot 2025-04-14 at 20 24 56" src="https://github.com/user-attachments/assets/373ea017-9815-4edb-a1d4-ccccceaf1e94" />
<img width="519" alt="Screenshot 2025-04-14 at 20 26 39" src="https://github.com/user-attachments/assets/3381d436-e62d-4059-8179-0ebef9c3f9f5" />
<img width="1008" alt="Screenshot 2025-04-14 at 20 32 41" src="https://github.com/user-attachments/assets/93275aba-471b-45ae-acc2-e3c9fa3e9fbb" />

**Коментарі щодо реалізації:** Були складнощі зі генеруванням міграцій TypeORM.
Міграції створювали несподівані мутації таблиці users

