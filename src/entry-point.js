import App from './App.svelte';

async function loadCSS() {
	try {
		const response = await fetch(chrome.runtime.getURL('style.css'));
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.text();
	} catch (error) {
		console.error('Failed to load CSS:', error);
		return '';
	}
}

(async function () {
	'use strict';

	if (window.zenflowSidebarInjected) return;
	window.zenflowSidebarInjected = true;

	const hostElement = document.createElement('div');
	hostElement.id = 'zenflow-extension-host';
	hostElement.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: fit-content;
    z-index: 999999;
  `;

	// Create shadow DOM
	const shadowRoot = hostElement.attachShadow({ mode: 'closed' });

	// Load and inject CSS into shadow DOM
	const cssContent = await loadCSS();
	if (cssContent) {
		const styleSheet = document.createElement('style');
		styleSheet.textContent = cssContent;
		shadowRoot.appendChild(styleSheet);
	}

	// Create container inside shadow DOM
	const container = document.createElement('div');
	container.id = 'zenflow-extension-root';
	container.style.cssText = `
    height: 100%;
    background-color: transparent;
    display: flex;
  `;

	shadowRoot.appendChild(container);
	document.body.appendChild(hostElement);

	// Create the main app component that contains both sidebar and panel
	const app = new App({
		target: container
	});

	if (typeof window !== 'undefined') {
		window.zenflowSidebar = {
			app,
			destroy: () => {
				app.$destroy();
				hostElement.remove();
				window.zenflowSidebarInjected = false;
			}
		};
	}
})();
