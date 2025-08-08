package com.example.todoapp.controller;

import com.example.todoapp.model.Tab;
import com.example.todoapp.model.Task;
import com.example.todoapp.service.TabService;
import com.example.todoapp.service.TaskService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import jakarta.validation.Valid;
import jakarta.persistence.EntityManager;
import java.util.List;
import java.util.Date;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/users/{userId}")
public class TodoController {
    private final TabService tabService;
    private final TaskService taskService;

    public TodoController(TabService tabService, TaskService taskService) {
        this.tabService = tabService;
        this.taskService = taskService;
    }

    // --- 既存の一覧取得 ---
    @GetMapping("/tabs")
    public List<Tab> getTabs(@PathVariable String userId) {
        return tabService.getTabsByUser(userId);
    }

    @GetMapping("/tabs/{tabId}/tasks")
    public List<Task> getTasks(@PathVariable String userId, @PathVariable String tabId) {
        return taskService.getTasksByTabId(tabId);
    }

    // --- タブの作成 ---
    @PostMapping("/tabs")
    public ResponseEntity<Tab> createTab(@PathVariable String userId, @RequestBody @Valid Tab tab) {
        // サービス側で userId をセットして保存する実装を用意
        Date nowDate = new Date();
        tab.setTabId(tab.getTabId());
        tab.setTabName(tab.getTabName());
        tab.setTabNote(tab.getTabNote());
        tab.setRecordDate(nowDate);
        tab.setRecordUser(userId);
        tab.setCreateDate(nowDate);
        tab.setCreateUser(userId);

        Tab savedTab = tabService.saveTab(tab);

        return ResponseEntity.ok(savedTab);
    }

    // --- タブの削除 ---
    // @DeleteMapping("/tabs/{tabId}")
    // @ResponseStatus(HttpStatus.NO_CONTENT)
    // public void deleteTab(@PathVariable String userId, @PathVariable Long tabId) {
    // // 必要なら userId の検証をサービス内で行う
    // tabService.deleteTab(tabId);
    // }

    // --- タスクの作成 ---
    // @PostMapping("/tabs/{tabId}/tasks")
    // @ResponseStatus(HttpStatus.CREATED)
    // public Task createTask(@PathVariable String userId, @PathVariable Long tabId,
    // @RequestBody Task task) {
    // // サービス側で tabId（と必要なら userId）をセットして保存する実装を用意
    // task.setTabId(tabId);
    // return taskService.createTask(task);
    // }

    // --- タスクの削除 ---
    // @DeleteMapping("/tabs/{tabId}/tasks/{taskId}")
    // @ResponseStatus(HttpStatus.NO_CONTENT)
    // public void deleteTask(@PathVariable String userId, @PathVariable Long tabId,
    // @PathVariable Long taskId) {
    // // 必要なら userId・tabId の検証をサービス内で行う
    // taskService.deleteTask(taskId);
    // }
}
