import { Routes } from '@angular/router';
import { Profile } from '../pages/profile/profile';
import { Home } from '../pages/home/home';
import { App } from './app';
import { Component } from '@angular/core';

export const routes = [
  { path: 'profile', component: Profile },
  { path: 'home', component: Home },
];
