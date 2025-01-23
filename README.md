# Filmlista med React och Typescript
Av Anne-Lii Hansen anha2324@student.miun.se

Denna applikation är resultatet av moment 1 i kursen "Fördjupad Frontend utveckling".
En enkel React-applikation som visar upp en lista med filmer. Koden är skriven i Typescript för typkontroll och den är komponentbaserad.

## Funktionalitet

*  Visar en lista med filmer med deras titel, utgivningsår och om filmen har setts och en default bild.
*  Filmlistan är hårdkodad i komponenten men kan enkelt utökas med dynamisk data.

## Projektstruktur

* **`Movie.tsx`**: En komponent som representerar en enskild film.
* **`MovieList.tsx`**: En komponent som hanterar och visar listan med filmer.
* **`Header.tsx`**: En komponent med header elementet.
* **`Footer.tsx`**: En komponent med footer elementet.

Till varje fil finns en CSS stilmall med samma namn med .css endelsen där den komponentspecifika CSS stylingen finns.

## Tech 🛠️

* **React**: För att bygga komponenter och hantera UI.
* **TypeScript**: För typkontroll och robust utveckling.
* **CSS**: För styling av applikationen.

## Installation och körning

1. Klona projketet:

```bash
git clone https://github.com/Anne-Lii/react_moment1.git
```
2. Navigera till projektet:

```bash
cd react-m1
```
3. Installera beroenden:

```bash
npm install
```
4. Starta servern:

```bash
npm start
```