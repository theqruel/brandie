const motionItems = document.querySelectorAll('#motionItem')

if (motionItems.length > 0) {
	window.addEventListener('scroll', scrollMotion)
	function scrollMotion(){
		for (let index = 0; index < motionItems.length; index++) {
			const motionItem = motionItems[index];
			const motionItemHeight = motionItem.offsetHeight;
			const motionItemOffset = offset(motionItem).top;
			const motionStart = 8;

			let motionItemPoint = window.innerHeight - motionItemHeight / motionStart;

			if (motionItemHeight > window.innerHeight){
				motionItemPoint = window.innerHeight - window.innerHeight / motionStart;
			}

			if ((pageYOffset > motionItemOffset - motionItemPoint && pageYOffset < (motionItemOffset + motionItemHeight))){
				motionItem.classList.add('_active');
			}else{
				motionItem.classList.remove('active');
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}
	setTimeout(() => {
		scrollMotion();
	}, 300)
}

