export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      academic_competition: {
        Row: {
          category: string | null;
          created_at: string;
          date: string | null;
          description: string | null;
          details_id: string;
          id: string;
          img: string | null;
          title: string | null;
          type: string | null;
        };
        Insert: {
          category?: string | null;
          created_at?: string;
          date?: string | null;
          description?: string | null;
          details_id: string;
          id?: string;
          img?: string | null;
          title?: string | null;
          type?: string | null;
        };
        Update: {
          category?: string | null;
          created_at?: string;
          date?: string | null;
          description?: string | null;
          details_id?: string;
          id?: string;
          img?: string | null;
          title?: string | null;
          type?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "academic_competition_details_id_fkey";
            columns: ["details_id"];
            isOneToOne: false;
            referencedRelation: "academic_competition_details";
            referencedColumns: ["id"];
          },
        ];
      };
      academic_competition_details: {
        Row: {
          announcement: string | null;
          created_at: string;
          description_details: string | null;
          id: string;
          img_details: string | null;
          open_register: string | null;
          presented_by: string | null;
          submission: string | null;
        };
        Insert: {
          announcement?: string | null;
          created_at?: string;
          description_details?: string | null;
          id?: string;
          img_details?: string | null;
          open_register?: string | null;
          presented_by?: string | null;
          submission?: string | null;
        };
        Update: {
          announcement?: string | null;
          created_at?: string;
          description_details?: string | null;
          id?: string;
          img_details?: string | null;
          open_register?: string | null;
          presented_by?: string | null;
          submission?: string | null;
        };
        Relationships: [];
      };
      academic_scholarship: {
        Row: {
          category: string | null;
          created_at: string;
          date: string | null;
          description: string | null;
          details_id: string;
          id: string;
          img: string | null;
          title: string | null;
          type: string | null;
        };
        Insert: {
          category?: string | null;
          created_at?: string;
          date?: string | null;
          description?: string | null;
          details_id: string;
          id?: string;
          img?: string | null;
          title?: string | null;
          type?: string | null;
        };
        Update: {
          category?: string | null;
          created_at?: string;
          date?: string | null;
          description?: string | null;
          details_id?: string;
          id?: string;
          img?: string | null;
          title?: string | null;
          type?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "academic_beasiswa_details_id_fkey";
            columns: ["details_id"];
            isOneToOne: false;
            referencedRelation: "academic_scholarship_details";
            referencedColumns: ["id"];
          },
        ];
      };
      academic_scholarship_details: {
        Row: {
          available_to: string | null;
          category: string | null;
          created_at: string;
          description_details: string | null;
          id: string;
          img_details: string | null;
          open_register: string | null;
          presented_by: string | null;
        };
        Insert: {
          available_to?: string | null;
          category?: string | null;
          created_at?: string;
          description_details?: string | null;
          id?: string;
          img_details?: string | null;
          open_register?: string | null;
          presented_by?: string | null;
        };
        Update: {
          available_to?: string | null;
          category?: string | null;
          created_at?: string;
          description_details?: string | null;
          id?: string;
          img_details?: string | null;
          open_register?: string | null;
          presented_by?: string | null;
        };
        Relationships: [];
      };
      academic_seminar: {
        Row: {
          category: string | null;
          created_at: string;
          date: string | null;
          description: string | null;
          details_id: string;
          id: string;
          img: string | null;
          title: string | null;
          type: string | null;
        };
        Insert: {
          category?: string | null;
          created_at?: string;
          date?: string | null;
          description?: string | null;
          details_id: string;
          id?: string;
          img?: string | null;
          title?: string | null;
          type?: string | null;
        };
        Update: {
          category?: string | null;
          created_at?: string;
          date?: string | null;
          description?: string | null;
          details_id?: string;
          id?: string;
          img?: string | null;
          title?: string | null;
          type?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "academic_seminar_details_id_fkey";
            columns: ["details_id"];
            isOneToOne: false;
            referencedRelation: "academic_seminar_details";
            referencedColumns: ["id"];
          },
        ];
      };
      academic_seminar_details: {
        Row: {
          created_at: string;
          date: string | null;
          description_details: string | null;
          id: string;
          img_details: string | null;
          media: string | null;
          open_to: string | null;
          presented_by: string | null;
          time: string | null;
        };
        Insert: {
          created_at?: string;
          date?: string | null;
          description_details?: string | null;
          id?: string;
          img_details?: string | null;
          media?: string | null;
          open_to?: string | null;
          presented_by?: string | null;
          time?: string | null;
        };
        Update: {
          created_at?: string;
          date?: string | null;
          description_details?: string | null;
          id?: string;
          img_details?: string | null;
          media?: string | null;
          open_to?: string | null;
          presented_by?: string | null;
          time?: string | null;
        };
        Relationships: [];
      };
      division: {
        Row: {
          created_at: string;
          id: string;
          info_desc: string[] | null;
          info_title: string[] | null;
          title: string | null;
        };
        Insert: {
          created_at?: string;
          id?: string;
          info_desc?: string[] | null;
          info_title?: string[] | null;
          title?: string | null;
        };
        Update: {
          created_at?: string;
          id?: string;
          info_desc?: string[] | null;
          info_title?: string[] | null;
          title?: string | null;
        };
        Relationships: [];
      };
      member: {
        Row: {
          created_at: string;
          division_id: string | null;
          email: string | null;
          id: string;
          instagram: string | null;
          name: string | null;
          position_id: string | null;
          assets: string | null;
        };
        Insert: {
          created_at?: string;
          division_id?: string | null;
          email?: string | null;
          id?: string;
          instagram?: string | null;
          name?: string | null;
          position_id?: string | null;
          assets?: string | null;
        };
        Update: {
          created_at?: string;
          division_id?: string | null;
          email?: string | null;
          id?: string;
          instagram?: string | null;
          name?: string | null;
          position_id?: string | null;
          assets?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "member_division_id_fkey";
            columns: ["division_id"];
            isOneToOne: false;
            referencedRelation: "division";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "member_position_id_fkey";
            columns: ["position_id"];
            isOneToOne: false;
            referencedRelation: "position";
            referencedColumns: ["id"];
          },
        ];
      };
      position: {
        Row: {
          created_at: string;
          id: string;
          position_name: string | null;
          assets: string | null;
        };
        Insert: {
          created_at?: string;
          id?: string;
          position_name?: string | null;
          assets?: string | null;
        };
        Update: {
          created_at?: string;
          id?: string;
          position_name?: string | null;
          assets?: string | null;
        };
        Relationships: [];
      };
      proker: {
        Row: {
          assets: string[] | null;
          benefits: string[] | null;
          date: string | null;
          description: string | null;
          dinas: string | null;
          event_format: string | null;
          id: string;
          name: string;
        };
        Insert: {
          assets?: string[] | null;
          benefits?: string[] | null;
          date?: string | null;
          description?: string | null;
          dinas?: string | null;
          event_format?: string | null;
          id?: string;
          name: string;
        };
        Update: {
          assets?: string[] | null;
          benefits?: string[] | null;
          date?: string | null;
          description?: string | null;
          dinas?: string | null;
          event_format?: string | null;
          id?: string;
          name?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      get_table_structure: {
        Args: {
          table_name: string;
        };
        Returns: {
          column_name: string;
          data_type: string;
          is_nullable: string;
        }[];
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, "public">];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never;
