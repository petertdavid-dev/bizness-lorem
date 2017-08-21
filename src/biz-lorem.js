/*
  ____  ____    ___   __ __  ______      ______  __ __    ___       ____  _____
 /    T|    \  /   \ |  T  T|      T    |      T|  T  T  /  _]     |    |/ ___/
Y  o  ||  o  )Y     Y|  |  ||      |    |      ||  l  | /  [_      l__  (   \_ 
|     ||     T|  O  ||  |  |l_j  l_j    l_j  l_j|  _  |Y    _]     __j  |\__  T
|  _  ||  O  ||     ||  :  |  |  |        |  |  |  |  ||   [_     /  |  |/  \ |
|  |  ||     |l     !l     |  |  |        |  |  |  |  ||     T    \  `  |\    |
l__j__jl_____j \___/  \__,_j  l__j        l__j  l__j__jl_____j     \____j \___j

This is vanilla JS so as not to rely on any dependancies for this simple portfolio
page. Normally I use jQuery for sake of ease, and use preprocessors to compile
and minify.
                                                                               
*/


var lorem = {

	helpers: {
		words: [ 'BID', 'Break it down', 'COB', 'Close of business', 'EOD', 'End of day', 'EOM', 'End of message', 'EOT', 'End of thread', 'EOW', 'End of week', 'ETA', 'Estimated time of arrival', 'FTE', 'Full-time employee', 'FWIW', 'For what it’s worth', 'IAM', 'In a meeting', 'IMO', 'In my opinion', 'KISS', 'Keep it simple stupid', 'LET', 'Leaving early today', 'LMK', 'Let me know', 'MoM', 'Month over month', 'MTD', 'Month to date', 'NIM', 'No internal message', 'OOO', 'Out of office', 'OT', 'Off topic', 'OTP', 'On the phone', 'PA', 'Performance appraisal', 'POC', 'Point of contact', 'PTE', 'Part-time employee', 'PTO', 'Paid time off', 'NRN', 'No reply necessary', 'NSFW', 'Not safe for work', 'NWR', 'Not work related', 'Re', 'Referring to', 'RFD', 'Request for discussion', 'SMART', 'Specific, measurable, attainable, realistic, time-bound', 'SME', 'Subject matter expert', 'TED', 'Tell me, explain to me, describe to me', 'TL;DR', 'Too long, didn’t read', 'TLTR', 'Too long to read', 'TOS', 'Terms of service', 'TYT', 'Take your time', 'WFH', 'Work from home', 'WIIFM', 'What’s in it for me', 'WOM', 'Word of mouth', 'YTD', 'Year to date', 'ACCT', 'Account', 'AP ', 'Accounts payable', 'AR ', 'Accounts receivable', 'BS', 'Balance sheet', 'CPU', 'Cost per unit', 'CR', 'Credit', 'DR', 'Debit', 'EPS ', 'Earnings per share', 'FIFO ', 'First in, first out', 'IPO', 'Initial public offering', 'LIFO ', 'Last in, first out', 'LWOP', 'Leave without pay', 'NAV ', 'Net assets value', 'P-card', 'Purchase card', 'ROA', 'Return on assets', 'ROE', 'Return on equity', 'ROI', 'Return on investment', 'P/E ', 'Price to earnings', 'P&L', 'Profit and loss', 'API', 'Application program interface', 'CPU', 'Central processing unit', 'CSS ', 'Cascading style sheet', 'FTP', 'File transport protocol', 'HTML ', 'HyperText markup language', 'HTTP', 'HyperText transfer protocol', 'HTTPS', 'HyperText transfer protocol secure', 'IM', 'Instant messaging', 'IP', 'Internet protocol', 'ISP', 'Internet service provider', 'OS', 'Operating system', 'QA ', 'Quality assurance', 'UI ', 'User interface', 'URL', 'Universal resource locator', 'UX ', 'User experience', 'VPN ', 'Virtual private network', 'RAM', 'Random-access memory', 'ROR', 'Ruby on Rails', 'RSS ', 'Rich site summary or really simple syndication', 'WYSIWYG ', 'What you see is what you get', 'AIDA', 'Attention, interest, desire, action', 'B2B', 'Business to business', 'B2C', 'Business to consumer', 'BR', 'Bounce rate', 'CMS ', 'Content management system', 'CPC ', 'Cost per click', 'CTA', 'Call to action', 'CTR ', 'Click through rate', 'CR', 'Conversion rate', 'CRM', 'Customer relationship management', 'DM', 'Direct message or direct mail', 'ESP', 'Email service provider', 'GA', 'Google Analytics', 'KPI ', 'Key performance indicator', 'PPC ', 'Pay per click', 'PV', 'Page view', 'RFP', 'Request for proposal', 'ROS ', 'Run of site', 'RT', 'Retweet', 'SaaS', 'Software as a service', 'SEO ', 'Search engine optimization', 'SM', 'Social media', 'SMB', 'Small to medium business', 'SWOT', 'Strengths, weaknesses, opportunities, threats', 'UV', 'Unique visitor', 'BD', 'Business development', 'CAO', 'Chief analytics officer', 'CDO', 'Chief data officer', 'CEO', 'Chief executive officer', 'CFO', 'Chief financial officer', 'CIO', 'Chief information officer', 'CMO', 'Chief marketing officer', 'COO', 'Chief operating officer', 'CPA', 'Certified public accountant', 'CSO', 'Chief security officer', 'CSR', 'Corporate social responsibility', 'CTO', 'Chief technology officer', 'CFP', 'Certified financial planner', 'DOE', 'Depending on experience', 'GC', 'General counsel', 'HR', 'Human resources', 'PM', 'Project manager', 'PR', 'Public relations', 'R&D', 'Research and development', 'TPS', 'Testing Procedure Specification', 'Peter David is a rockstar', 'you should hire Peter' ],
		loremButton: document.getElementsByClassName( 'lorem__button' ),
		loremParagraphs: document.getElementsByClassName( 'lorem__paragraphs' ),
		loremText: document.getElementsByClassName( 'lorem__text' ),
		loremParaLength: document.getElementsByName( 'para-length' )
	},

	/**
	 * Create paragraphs.
	 *
	 */
	paragraphs: function( count ) {

		var sentenceNum = 3;
		var radios = lorem.helpers.loremParaLength;

		for ( var i = 0, len = radios.length; i < len; ++i ) {
			if ( radios[ i ].checked ) {

				var sentenceNum = radios[ i ].value;
			}
		}

		var html = '';

		for ( var i = 0; i < sentenceNum; i++ ) {
			html += lorem.sentences();
		}

		return html;
	},

	/**
	 * Create sentences.
	 *
	 */
	sentences: function() {

		var sentenceLength = Math.floor( Math.random() * 4 ) + 4;
		var html = '';

		for ( var i = 0; i < sentenceLength; i++ ) {
			word = lorem.helpers.words[ Math.floor( Math.random() * lorem.helpers.words.length ) ];
			html += ( i === 1 ) ? word.charAt( 0 ).toUpperCase() + word.slice( 1 ) : word;
			html += ( ( i + 1 ) === sentenceLength ) ? '. ' : ' ';
		}

		return html;
	},

	/**
	 * Generate lorem ipsum.
	 *
	 */
	generate: function() {

		var paraCount = lorem.helpers.loremParagraphs[ 0 ].value;
		var html = '';

		for ( var i = 0; i < paraCount; i++ ) {
			html += '<p>';
			html += lorem.paragraphs();
			html += '</p>';
		}

		lorem.helpers.loremText[ 0 ].innerHTML = html;
	}

};

// Listeners.
window.onload = function( e ) {
	lorem.generate();
}

document.getElementsByClassName( 'lorem__form' )[ 0 ].addEventListener( "submit", function( evt ) {
	evt.preventDefault();
	lorem.generate();
} );


document.getElementsByClassName( 'lorem__button' )[ 0 ].onclick = function() {
	lorem.generate();
	return false;
};