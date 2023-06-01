## Instructions pour les TPs

### Pré-requis
- Docker, Docker Compose, POSTMAN (ou CURL)

## TP2 : Services externes
1. Provisionner la base de données en local `docker-compose up -d`
2. Rattacher votre application à la base de données
3. Lancer la migration `npm run migrate`
4. Lancer l'application en local et tester le `POST` et le `GET` /`todos`
5. Merger votre code sur master (en local)
6. Préparer votre application pour le déploiement :
   1. Automatiser la migration graçe au `Procfile`
   2. Provisionnement d'une base de donnée sur Scalingo
   3. Déploiement (automatique lors d'un push du master local sur master du repo en remote)