const config = {
	//网页元数据
	metaData: {
		title: 'XPH的个人主页🎉',
		description: '欢迎来到XPH的奇妙世界！',
		keywords: 'Roman,Vector,个人主页,个人网站',
		icon: '/favicon.ico'   //网页图标，支持外链
	},

	avatar: "/img/mao.jpg", // 头像
	welcometitle: "Hi, I'm RomanVector", // 标题

	// 颜色配置
	color: {
		themecolor: "#FFFFFF", // 主题颜色，推荐趋于亮白可带有轻微色调，例： #D1FFEC
		welcometitlecolor: "#FFFFFF", // 标题颜色 例： #7BFFC9
	},

	brightness: 85, // 背景亮度 --%
	blur: 5, // 毛玻璃模糊效果

	// 我的标签
	tags: ['i人', 'linux', 'C++', "MATLAB","C",'嵌入式', 'INHE', ],

	// 默认背景壁纸
	background: {
		"pc": {   //pc端
			"type": "video",   //"pic":静态壁纸;"video":动态壁纸
			"datainfo": {
				"title": "shangshahuili",
				"preview": "/img/wallpaper/dynamic/shangshahuiliyi/shangshahuiliyi-pre.webm",
				"url": "/img/wallpaper/dynamic/shangshahuiliyi/shangshahuiliyi.webm",     //当然，也可填写网络地址或壁纸api，如随机PC壁纸api："url":"https://t.mwm.moe/pc"
			},
		},
		"mobile": {   //移动端
			"type": "pic",
			"datainfo": {
				"title": "0001",
				"preview": "/img/wallpaper/static-mobile/0001/image-pre.webp",
				"url": "/img/wallpaper/static-mobile/0001/image.png"  //同理，随机移动端壁纸："url":"https://t.mwm.moe/mp"
			}
		}

	},

	//极坐标图数据
	polarChart: {
		skills: ['Vue.js', 'React', 'JavaScript', 'Node', 'MATLAB', 'Python', 'linux', 'Docker', 'MySQL', 'C++', 'C'],
		skillPoints: [85, 78, 88, 90, 80, 78, 85, 65, 82, 78, 70],
	},

	//社交按钮
	socialPlatformIcons: [
		{ icon: "mdi-github", link: "https://github.com/RomanVecter/" },
		{ icon: "mdi-email", link: "mailto:mocerre@gmail.com"},
		{ icon: "mdi-qqchat", link: "https://im.qq.com/" },
		{ icon: "mdi-wechat", link: "https://wx.qq.com/" },
		{ icon: "mdi-youtube", link: "https://www.youtube.com" },
		{ icon: "mdi-facebook", link: "https://www.facebook.com" }
	],

	//打字机
	typeWriterStrings: [
		// "远方有琴 愀然空灵 声声催天雨",
		// "别来无恙，你在心上",
		// "见心明性，照见本我",
		// "往前走吧，我相信，越过那座巍巍雪山，能看见春花的容颜",
		"外面的世界好大！",
		"去外面……更外面的地方。",
		"没关系的,跟Sakura在外面到处玩,很开心,所以我能坚持下来。这是我一生里最自由的时间,以前没有过,以后也不会有。",
		"想要，一个好朋友。",
		"我们两个，是朋友。",
		"我很喜欢这样的世界······但世界不喜欢我。",
		"我们都是小怪兽，总有一天会被正义的奥特曼杀死！",
		"······Sakura······Sakura······Sakura!",
		"04.24,和Sakura去东京天空树,世界上最暖和的地方在天空树的顶上。",
		"04.25,和Sakura去明治神宫,有人在那里举办婚礼。",
		"04.26,和Sakura去迪士尼,鬼屋很可怕,但是有Sakura在,所以不可怕。",
		"Sakura最好了...",
		"这个世界很温柔"
	],

	//音乐播放配置，采用MetingJS Api(https://github.com/metowolf/MetingJS)
	musicPlayer: {
		server: 'netease',  //服务提供商 --网易云音乐
		type: 'playlist',   //歌单类型
		id: '7401192246'  //歌单id ---> music.163.com/#/playlist?id=2028178887
	},

	//壁纸数据 -----可以将壁纸文件上传到图床获取网络直链。若想调用api，请前往脚本自行修改逻辑
	wallpaper: {
		pic: [
			{ "title": "海洋女孩", "preview": "/img/wallpaper/static/海洋女孩/image-pre.webp", "url": "/img/wallpaper/static/海洋女孩/image.png" },
			{ "title": "书房夜晚", "preview": "/img/wallpaper/static/书房夜晚/image-pre.webp", "url": "/img/wallpaper/static/书房夜晚/image.png" },
			{ "title": "安逸舒适", "preview": "/img/wallpaper/static/安逸舒适/image-pre.webp", "url": "/img/wallpaper/static/安逸舒适/image.png" },
			{ "title": "jswcMaMj", "preview": "https://s21.ax1x.com/2025/07/23/pVGli59.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGli59.jpg" },
			{ "title": "pgtTqoqq", "preview": "https://s21.ax1x.com/2025/07/23/pVGlmDO.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGlmDO.jpg" },
			{ "title": "cvKMKhue", "preview": "https://s21.ax1x.com/2025/07/23/pVGlNqS.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGlNqS.jpg" },
			{ "title": "XpxvQVoP", "preview": "https://s21.ax1x.com/2025/07/23/pVGlfIJ.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGlfIJ.jpg" },
			{ "title": "fVEEjEOA", "preview": "https://s21.ax1x.com/2025/07/23/pVGlEgx.md.webp", "url": "https://s21.ax1x.com/2025/07/23/pVGlEgx.webp" },
			{ "title": "jgnIKMpd", "preview": "https://s21.ax1x.com/2025/07/23/pVGldaQ.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGldaQ.jpg" },
			{ "title": "mgqyySeh", "preview": "https://s21.ax1x.com/2025/07/23/pVGl82t.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGl82t.jpg" },
			{ "title": "dSXZfZp", "preview": "https://s21.ax1x.com/2025/07/23/pVGlaVg.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGlaVg.jpg" },
		],
		picMobile: [
			{ "title": "0001", "preview": "/img/wallpaper/static-mobile/0001/image-pre.webp", "url": "/img/wallpaper/static-mobile/0001/image.png" },
			{ "title": "0002", "preview": "/img/wallpaper/static-mobile/0002/image-pre.webp", "url": "/img/wallpaper/static-mobile/0002/image.png" },
			{ "title": "0003", "preview": "/img/wallpaper/static-mobile/0003/image-pre.webp", "url": "/img/wallpaper/static-mobile/0003/image.png" },
			{ "title": "0004", "preview": "/img/wallpaper/static-mobile/0004/image-pre.webp", "url": "/img/wallpaper/static-mobile/0004/image.png" },
			{ "title": "DfNHPPcc", "preview": "https://s21.ax1x.com/2025/07/23/pVG1uQ0.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVG1uQ0.jpg" },
			{ "title": "cZZwzhis", "preview": "https://s21.ax1x.com/2025/07/23/pVG1Vij.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVG1Vij.jpg" },
			{ "title": "aANKZHPX", "preview": "https://s21.ax1x.com/2025/07/23/pVGlIR1.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGlIR1.jpg" },
		],
		video: [
			{
				"title": "Nier-Automata-Team",
				"preview": "/img/wallpaper/dynamic/Nier-Automata-Team/Nier-Automata-Team-pre.webm",
				"url": "/img/wallpaper/dynamic/Nier-Automata-Team/Nier-Automata-Team.webm"
			},
			{
				"title": "Toy-Aeroplane",
				"preview": "/img/wallpaper/dynamic/Toy-Aeroplane/Toy-Aeroplane-pre.webm",
				"url": "/img/wallpaper/dynamic/Toy-Aeroplane/Toy-Aeroplane.webm"
			},
			{
				"title": "shangshahuiliyi",
				"preview": "/img/wallpaper/dynamic/shangshahuiliyi/shangshahuiliyi-pre.webm",
				"url": "/img/wallpaper/dynamic/shangshahuiliyi/shangshahuiliyi.webm"
			},

			// "preview": "https://lpan.leleo.top/d/guest/wallpaper/dynamic/%E4%B8%96%E7%95%8C%E5%BE%88%E6%B8%A9%E6%9F%94%E3%80%8A%E9%BE%99%E6%97%8F%E3%80%8B%E4%B8%8A%E6%9D%89%E7%BB%98%E6%A2%A8%E8%A1%A3/The%20world%20is%20gentle-Dragon%20Clan-Uesugi-pre.webm",
			// 	"url": "https://lpan.leleo.top/d/guest/wallpaper/dynamic/%E4%B8%96%E7%95%8C%E5%BE%88%E6%B8%A9%E6%9F%94%E3%80%8A%E9%BE%99%E6%97%8F%E3%80%8B%E4%B8%8A%E6%9D%89%E7%BB%98%E6%A2%A8%E8%A1%A3/The%20world%20is%20gentle-Dragon%20Clan-Uesugi.webm"
		],
		videoMobile: [
			{
				"title": "幻觉镇-gaako_illust",
				"preview": "/img/wallpaper/dynamic-mobile/幻觉镇-gaako_illust/Hallucination_town-pre.mp4",
				"url": "/img/wallpaper/dynamic-mobile/幻觉镇-gaako_illust/Hallucination_town.mp4"
			},
			{
				"title": "chuva",
				"preview": "/img/wallpaper/dynamic-mobile/chuva/chuva-pre.mp4",
				"url": "/img/wallpaper/dynamic-mobile/chuva/chuva.mp4"
			},
			{
				"title": "Doodle-小猫女仆降临",
				"preview": "/img/wallpaper/dynamic-mobile/Doodle-小猫女仆降临/d12-pre.mp4",
				"url": "/img/wallpaper/dynamic-mobile/Doodle-小猫女仆降临/d12.mp4"
			},
		],
	},

	//项目卡片 其中 字段"show"控制初始卡片的text是否展开
	projectcards: [
		{ go: "🚀 前往", img: "/img/sunshine.jpg", title: "博客", subtitle: "真的不知道写啥", text: "所以你打不开。哈哈，这博客怕是得了“写作拖延症”，连打开都成了“薛定谔的猫”——你不点进去，永远不知道它到底是空的还是满的。或许它正在偷偷酝酿一篇惊天动地的文章，只是还没找到灵感，或者干脆在摸鱼。总之，博客的门关得紧紧的，仿佛在说：“今天不营业，改天再来吧！”", url: "https://leleo.top", show: false },
		{ go: "🗂️ 前往", img: "/img/boge/sun.jpg", title: "网盘", subtitle: "我的私人学习资料", text: "不是你想的那样，是正经的！.", url: "https://leleo.top", show: false },
		{ go: "📝 前往", img: "/img/boge/flower.jpg", title: "日常", subtitle: "i人哪有日常", text: "i人真的真的没有日常.", url: "https://leleo.top", show: false  },
		{ go: "👍 前往", img: "/img/boge/saibopengke.png", title: "游戏", subtitle: "电子yanwei中", text: "赛博朋克2077真不错啊.", url: "https://leleo.top", show: false  },
		{ go: "🗃 前往", img: "/img/sunshine.jpg", title: "留言", subtitle: "有什么想说的就说出来吧", text: "你头顶这么尖尖的？.", url: "https://leleo.top", show: false  },
		{ go: "🎨 前往", img: "/img/sunshine.jpg", title: "数据", subtitle: "数据别问,问就是莫得", text: "不可说.", url: "https://leleo.top", show: false  },
		{ go: "💍 前往", img: "/img/sunshine.jpg", title: "一切待定", subtitle: "就是懒得动了", text: "不可说.", url: "https://leleo.top", show: false  },
		{ go: "🔍 前往", img: "/img/sunshine.jpg", title: "未来可期", subtitle: "同左", text: "不可说.", url: "https://leleo.top", show: false  },
	],

	statement: ["备案号：XXICP备号", "Copyright © 2025 Leleo"],
}

export default config