import rules from './rules.json' assert { type: 'json' }; // Only works in Chrome/Chromium for now

const inputs = document.querySelectorAll('.input');

const applyRules = (input, ruleset) => {
	ruleset.forEach((rule) => {
		const patternAndFlags = rule.pattern.match(/\/(.*)\/(.*)?/);
		const pattern = patternAndFlags[1];
		const flags = patternAndFlags[2];
		const regex = new RegExp(pattern, flags);
		const errorType = rule.type;
		input.innerHTML = input.innerHTML.replaceAll(
			regex,
			`<span class="${errorType}">$&</span>`
		);
	});
};

[...inputs].forEach((input) => {
	applyRules(input, rules);
});

/* TODO
 * Add eventListener to check for changes and on load
 * Keep the cursor in its original spot when updating the string
 * Add rules
 * Find a solution for normal input elements
 */
