class Component {
	createElementAttribute(name, value) {
		return {
			name,
			value,
		};
	}

	createElement(tag, className, text, attributes) {
		const newElement = document.createElement(tag);
		if (className) {
			newElement.className = className;
		}
		newElement.textContent = text || '';
		if (attributes && attributes.length > 0) {
			for (const attr of attributes) {
				newElement.setAttribute(attr.name, attr.value);
			}
		}
		return newElement;
	}
}

class Header extends Component {
	render() {
		const headerEl = this.createElement('header');

		const headerTitleEl = this.createElement(
			'h1',
			'sr-only',
			'Stats preview card component'
		);

		headerEl.appendChild(headerTitleEl);

		return headerEl;
	}
}

class Card extends Component {
	render() {
		const cardEl = this.createElement('article', 'card');

		/* card image */
		const cardImageWrapperEl = this.createElement('div', 'card__image');

		const cardImageInnerEl = this.createElement('div', 'card__image-inner');

		const cardImageEl = this.createElement('img', null, null, [
			this.createElementAttribute('src', './images/meeting.jpg'),
			this.createElementAttribute('alt', ''),
		]);

		cardImageInnerEl.appendChild(cardImageEl);

		cardImageWrapperEl.appendChild(cardImageInnerEl);

		/* card content */
		const cardContentEl = this.createElement('div', 'card__content');

		/* card title */
		const cardTitleEl = this.createElement('h2', 'card__title', 'Get ');

		const cardTitleSpanEl = this.createElement('mark', null, 'insight');

		cardTitleEl.append(cardTitleSpanEl, ' that help your business grow.');

		/* card description */
		const cardDescriptionEl = this.createElement(
			'p',
			'card__desc',
			'Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.'
		);

		/* card statuses */
		const cardStatusListEl = this.createElement('ul', 'card__stats-list');

		const cardStatuses = [
			{
				label: 'Companies',
				amount: '10K+',
			},
			{
				label: 'Templates',
				amount: '314',
			},
			{
				label: 'Queries',
				amount: '12M+',
			},
		];

		for (const status of cardStatuses) {
			const cardStatusItemEl = this.createElement(
				'li',
				'card__stats-list-item'
			);

			const cardStatusItemAmountEl = this.createElement(
				'span',
				'num',
				status.amount
			);

			const cardStatusItemTextEl = this.createElement(
				'span',
				'label',
				status.label
			);

			cardStatusItemEl.appendChild(cardStatusItemAmountEl);
			cardStatusItemEl.appendChild(cardStatusItemTextEl);

			cardStatusListEl.appendChild(cardStatusItemEl);
		}

		cardContentEl.appendChild(cardTitleEl);
		cardContentEl.appendChild(cardDescriptionEl);
		cardContentEl.appendChild(cardStatusListEl);

		cardEl.appendChild(cardImageWrapperEl);
		cardEl.appendChild(cardContentEl);

		return cardEl;
	}
}

class Main extends Component {
	render() {
		const mainEl = this.createElement('main');

		const mainContainerEl = this.createElement('div', 'container');

		const card = new Card();
		const cardEl = card.render();

		mainContainerEl.appendChild(cardEl);

		mainEl.appendChild(mainContainerEl);

		return mainEl;
	}
}

class Footer extends Component {
	render() {
		const footerEl = this.createElement('footer');

		const footerContainerEl = this.createElement('div', 'container');

		const footerTextEl = this.createElement('p', null, 'Challenge by ');

		const footerTextLinkCreatorEl = this.createElement(
			'a',
			'btn btn--link',
			'Frontend Mentor',
			[
				this.createElementAttribute(
					'href',
					'https://www.frontendmentor.io?ref=challenge'
				),
				this.createElementAttribute('rel', 'noopener'),
				this.createElementAttribute('target', '_blank'),
			]
		);

		const footerTextLinkCoderEl = this.createElement(
			'a',
			'btn btn--link',
			'al3xback',
			[
				this.createElementAttribute(
					'href',
					'https://github.com/al3xback'
				),
				this.createElementAttribute('rel', 'noopener'),
				this.createElementAttribute('target', '_blank'),
			]
		);

		footerTextEl.appendChild(footerTextLinkCreatorEl);
		footerTextEl.append('. Coded by ');
		footerTextEl.appendChild(footerTextLinkCoderEl);

		footerContainerEl.appendChild(footerTextEl);

		footerEl.appendChild(footerContainerEl);

		return footerEl;
	}
}

export { Component, Header, Card, Main, Footer };
