package com.example.todoapp.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import java.util.Date;

@Entity
@Data
@Table(name = "tab")
public class Tab {
    @Id
    @Column(name = "tab_id")
    private String tabId;
    @Column(name = "tab_name")
    private String tabName;
    @Column(name = "tab_color")
    private String tabColor;
    @Column(name = "tab_note")
    private String tabNote;
    @Column(name = "record_date")
    private Date recordDate;
    @Column(name = "record_user")
    private String recordUser;
    @Column(name = "create_date")
    private Date createDate;
    @Column(name = "create_user")
    private String createUser;

    public String getTabId() {
        return tabId;
    }

    public void setTabId(String tabId) {
        this.tabId = tabId;
    }

    public String getTabName() {
        return tabName;
    }

    public void setTabName(String tabName) {
        this.tabName = tabName;
    }

    public String getTabColor() {
        return tabColor;
    }

    public void setTabColor(String tabColor) {
        this.tabColor = tabColor;
    }

    public String getTabNote() {
        return tabNote;
    }

    public void setTabNote(String tabNote) {
        this.tabNote = tabNote;
    }

    public Date getRecordDate() {
        return recordDate;
    }

    public void setRecordDate(Date recordDate) {
        this.recordDate = recordDate;
    }

    public String getRecordUser() {
        return recordUser;
    }

    public void setRecordUser(String recordUser) {
        this.recordUser = recordUser;
    }

    public Date getCreateDate() {
        return createDate;
    }

    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }

    public String getCreateUser() {
        return createUser;
    }

    public void setCreateUser(String createUser) {
        this.createUser = createUser;
    }
}
