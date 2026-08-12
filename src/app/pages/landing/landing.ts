import { Component } from '@angular/core';
import { Header } from '../layout/header/header';
import { CommonModule } from '@angular/common';

interface RoadmapItem {
    date: string;
    description: string;
    position: 'top' | 'bottom';
    completed?: boolean;
}

@Component({
    selector: 'app-landing',
    imports: [Header, CommonModule],
    templateUrl: './landing.html',
    styleUrl: './landing.scss',
})

export class Landing {
    roadmapData: RoadmapItem[] = [
        {
            date: 'March 2018',
            description: 'Start of the ICO Crypto Platform Development.',
            position: 'top',
            completed: true
        },
        {
            date: 'June 2018',
            description: 'Over 100 merchants on site',
            position: 'bottom',
            completed: true
        },
        {
            date: 'June 2018',
            description: 'Launched of mobile Apps',
            position: 'top'
        },

        {
            date: 'August 2018',
            description: 'ICO preparation & Press Tour',
            position: 'bottom'
        },
        {
            date: 'October 2018',
            description: 'Start Token Sale Round (1)',
            position: 'top'
        },
        {
            date: 'December 2018',
            description: 'Partnership for the future EcoSystem',
            position: 'bottom'
        },
        {
            date: 'January 2019',
            description: 'Our team set-up and commercial preparation',
            position: 'top'
        },
        {
            date: 'May 2019',
            description: 'Priority opening for Token holder',
            position: 'bottom'
        },
        {
            date: 'June 2019',
            description: 'Start Token Sale Round (2)',
            position: 'top'
        },
        {
            date: 'October 2019',
            description: 'Blockchain usage announcement for global Network',
            position: 'bottom'
        },
        {
            date: 'December 2019',
            description: 'Operational Launch United States to general',
            position: 'top'
        }
    ];
}
