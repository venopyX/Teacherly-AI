**Confirmation of Current Status & Minor Refinements:**

*   The implemented sections (Landing, Auth, Dashboard Layout/Home, Generation Hub Forms) align well with the initial requirements and the provided mockups/descriptions.
*   The use of reusable components like `AnimatedElement` is good practice.
*   **Refinement Needed:** As noted in the status report, the Generation Hub currently only handles the *input* forms. The workflow needs to be completed to handle the AI processing state (loading) and display/manage the *output* (generated content). This requires additional UI elements and potentially new routes/pages for viewing saved content.

**Proposed Frontend Architecture (Next.js App Router):**

Based on the current structure and the remaining requirements, here is the refined and expanded frontend architecture:

```
/src
├── app/
│   ├── layout.tsx                 # Root Layout (Implemented)
│   ├── page.tsx                   # Landing Page (Implemented)
│   ├── (authentication)/          # Group for auth routes
│   │   ├── auth/
│   │   │   ├── page.tsx           # Login/Signup (Implemented)
│   │   │   └── forgot-password/
│   │   │       └── page.tsx       # Forgot Password (Implemented)
│   └── (dashboard)/               # Group for protected dashboard routes
│       ├── dashboard/
│       │   ├── layout.tsx         # Dashboard Layout (Implemented)
│       │   ├── page.tsx           # Dashboard Home (Implemented)
│       │   │
│       │   ├── generation-hub/    # --- Generation Features ---
│       │   │   ├── page.tsx       # Gen Hub Home (Implemented)
│       │   │   ├── material/
│       │   │   │   └── page.tsx   # Material Gen Form (Implemented)
│       │   │   ├── exam/
│       │   │   │   └── page.tsx   # Exam Gen Form (Implemented)
│       │   │   └── library/       # [PENDING] View/Manage Saved Content
│       │   │       ├── page.tsx   # List generated items
│       │   │       └── [contentId]/ # [PENDING] View/Edit specific item
│       │   │           └── page.tsx
│       │   │
│       │   ├── students/          # --- Student Management --- [PENDING]
│       │   │   ├── page.tsx       # Student List & Add/Manage
│       │   │   └── [studentId]/   # [PENDING] Individual Student Details
│       │   │       └── page.tsx   # View profile, grades, attendance
│       │   │
│       │   ├── grading/           # --- Grading & Assessment --- [PENDING]
│       │   │   ├── page.tsx       # List assessments, view status
│       │   │   └── [assessmentId]/ # [PENDING] Grading Interface
│       │   │       └── page.tsx   # Upload scans, view results per student
│       │   │
│       │   ├── attendance/        # --- Attendance Tracking --- [PENDING]
│       │   │   └── page.tsx       # Mark attendance, view reports
│       │   │
│       │   ├── reports/           # --- Reporting --- [PENDING]
│       │   │   └── page.tsx       # Generate/Export/Email Reports
│       │   │
│       │   ├── settings/          # --- User Settings --- [PENDING]
│       │   │   ├── page.tsx       # Settings Overview/Navigation
│       │   │   ├── profile/       # [PENDING]
│       │   │   │   └── page.tsx   # Edit User Profile
│       │   │   ├── security/      # [PENDING]
│       │   │   │   └── page.tsx   # Change Password, Manage 2FA
│       │   │   └── preferences/   # [PENDING]
│       │   │       └── page.tsx   # Language, etc.
│       │   │
│       │   └── help/              # --- Help/Support --- [PENDING]
│       │       └── page.tsx       # Display FAQs/Documentation
│
├── components/                    # Reusable UI Components
│   ├── AnimatedElement.tsx        # (Implemented)
│   ├── AnimatedSection.tsx        # (Implemented)
│   ├── ScrollDownButton.tsx       # (Implemented)
│   ├── ui/                        # Base UI elements (e.g., Button, Input, Card, Modal, Table, Sidebar, Header, Tooltip, Select, Checkbox) - *Likely partially implemented, needs expansion*
│   └── features/                  # Components specific to features (e.g., StudentTable, AttendanceGrid, GradingUploader, ReportGeneratorForm, ContentCard) - *To be created*
│
├── lib/                           # Utility functions, API clients (axios/fetch wrappers), constants, hooks (e.g., useAuth)
├── styles/                        # Global styles, Tailwind CSS config (if used)
├── public/                        # Static assets (images, icons)
└── ...                            # Other config files (next.config.js, tsconfig.json, etc.)
```

**Pending Pages and Core Components:**

Based on the architecture and the status report's "Pending Features":

1.  **Generation Hub Enhancements:**
    *   **UI Elements:** `LoadingSpinner`/`ProgressIndicator`, `ResultDisplayCard`/`Modal` (to show generated content), `Alert` (for success/error messages).
    *   **Page: `/dashboard/generation-hub/library/page.tsx`**
        *   **Purpose:** List previously generated and saved materials/exams.
        *   **Components:** `ContentTable`/`ContentCardList` (with filtering/sorting), `DeleteButton`, `EditButton`.
    *   **Page: `/dashboard/generation-hub/library/[contentId]/page.tsx`**
        *   **Purpose:** View details of a specific generated item, potentially edit.
        *   **Components:** `ContentViewer` (display formatted content), `EditContentForm` (optional).

2.  **Students Section (`/dashboard/students/`)**
    *   **Page: `page.tsx`**
        *   **Purpose:** Display a list of the teacher's students, allow adding/editing/removing students.
        *   **Components:** `StudentTable`, `AddStudentButton`, `AddStudentModal`/`Form`, `EditStudentModal`/`Form`, `SearchInput`.
    *   **Page: `[studentId]/page.tsx`**
        *   **Purpose:** Show detailed information for a single student.
        *   **Components:** `StudentInfoCard`, `GradeHistoryTable`/`Chart`, `AttendanceSummaryView`.

3.  **Grading Section (`/dashboard/grading/`)**
    *   **Page: `page.tsx`**
        *   **Purpose:** List exams/quizzes created by the teacher, showing status (e.g., awaiting submissions, grading in progress, completed). Link to grading interface.
        *   **Components:** `AssessmentListTable` (showing title, date, status).
    *   **Page: `[assessmentId]/page.tsx`**
        *   **Purpose:** The main interface for the automated grading process for a specific assessment.
        *   **Components:** `FileUploadArea` (for scanned PDFs/images), `StudentSubmissionList` (showing status per student: pending upload, OCR processing, grading, completed), `GradingResultViewer` (display score/feedback per student), `BulkActionButton` (e.g., "Start Grading All").

4.  **Attendance Section (`/dashboard/attendance/`)**
    *   **Page: `page.tsx`**
        *   **Purpose:** Mark daily attendance and view attendance records.
        *   **Components:** `DatePicker`, `SectionSelector` (if applicable), `AttendanceGrid` (interactive table to mark present/absent), `SaveAttendanceButton`, `AttendanceReportTable` (view historical data with filters).

5.  **Reports Section (`/dashboard/reports/`)**
    *   **Page: `page.tsx`**
        *   **Purpose:** Configure, generate, and view/export student reports.
        *   **Components:** `ReportConfigForm` (select students, date range, content - grades/attendance), `GenerateReportButton`, `ReportPreviewArea`, `ExportButton` (Excel), `EmailReportButton`.

6.  **Settings Section (`/dashboard/settings/`)**
    *   **Page: `page.tsx`**
        *   **Purpose:** Navigation hub for different settings categories.
        *   **Components:** `SettingsLinkCard` (linking to profile, security, preferences).
    *   **Page: `profile/page.tsx`**
        *   **Purpose:** Allow users to update their basic profile information.
        *   **Components:** `ProfileForm` (Name, Email - potentially read-only if used for login).
    *   **Page: `security/page.tsx`**
        *   **Purpose:** Manage account security settings.
        *   **Components:** `PasswordChangeForm`, `TwoFactorAuthSetup`/`Manage` component.
    *   **Page: `preferences/page.tsx`**
        *   **Purpose:** Set application preferences.
        *   **Components:** `LanguageSelector`, potentially other UI/theme preferences.

7.  **Help Section (`/dashboard/help/`)**
    *   **Page: `page.tsx`**
        *   **Purpose:** Provide users with documentation, FAQs, or support links.
        *   **Components:** Static content display components (`Accordion` for FAQs, formatted text blocks).