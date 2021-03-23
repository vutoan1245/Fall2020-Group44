type QuestionId = number;

interface QuestionAttributes {
	id: QuestionId;
	folderId: FolderId;
	courseId: CourseId;
	title: string;
	question: string;
}

interface QuestionCreationAttributes {
	folderId: FolderId | null;
	courseId: CourseId;
	question: string;
	title: string;
	participationPoints?: number;
	correctnessPoints?: number;
	QuestionOptions?: Array<QuestionOption>;
}
