type Social = {
	//
}

type FileAsset = {
	url: string;
}

type ImageAsset = {
	url: string;
	metadata: {
		dimensions: {
			width: number;
			height: number;
		}
	}
}

type PageDetails = {
	title: string;
	fullName: string;
	job: string;
	city: string;
	socials: Social[];
	resume: FileAsset;
}

type Techno = {
	_id: string;
	title: string;
	iconName: string;
}

type Skill = {
	_id: string;
	priority: number;
	title: string;
	technos?: Techno[];
}

type Project = {
	_id: string;
	priority: number;
	title: string;
	mainImage: ImageAsset;
	githubLink?: string;
	websiteLink?: string;
	description: string;
	technos: Techno[];
}
